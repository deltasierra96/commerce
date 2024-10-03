import { useFragment } from '@/__generated__';
import {
  CollectionFragmentDoc,
  GetCollectionsQuery,
  GetPagesQuery,
  GetProductsQuery,
  GetProductsQueryVariables,
  PageFragmentDoc,
  ProductFragmentDoc
} from '@/__generated__/graphql';
import { query } from '@/lib/apollo-client';
import { STORE_ROUTE_COLLECTIONS, STORE_ROUTE_PAGE, STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { validateEnvironmentVariables } from '@/lib/utils';
import { GET_COLLECTIONS_QUERY, GET_PAGES_QUERY, GET_PRODUCTS_QUERY } from '@/shopify';

import { MetadataRoute } from 'next';

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables();

  const routesMap = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));

  const collectionsPromise = query<GetCollectionsQuery>({
    query: GET_COLLECTIONS_QUERY
  }).then((collections) =>
    collections.data.collections.edges.map((c) => {
      const collection = useFragment(CollectionFragmentDoc, c.node);

      return {
        url: `${baseUrl}${STORE_ROUTE_COLLECTIONS}/${collection.handle}`,
        lastModified: collection.updatedAt
      };
    })
  );

  const productsPromise = query<GetProductsQuery, GetProductsQueryVariables>({
    query: GET_PRODUCTS_QUERY,
    variables: {}
  }).then((products) => {
    return products.data.products.edges.map((p) => {
      const product = useFragment(ProductFragmentDoc, p.node);

      return {
        url: `${baseUrl}${STORE_ROUTE_PRODUCT}/${product.handle}`,
        lastModified: product.updatedAt
      };
    });
  });

  const pagesPromise = query<GetPagesQuery>({
    query: GET_PAGES_QUERY
  }).then((pages) =>
    pages.data.pages.edges.map((p) => {
      const page = useFragment(PageFragmentDoc, p.node);

      return {
        url: `${baseUrl}${STORE_ROUTE_PAGE}/${page.handle}`,
        lastModified: page.updatedAt
      };
    })
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (await Promise.all([collectionsPromise, productsPromise, pagesPromise])).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchedRoutes];
}
