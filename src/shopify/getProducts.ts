import { TAGS } from '@/app/constants';
import { shopifyFetch } from './lib/fetch';
import { removeEdgesAndNodes, reshapeProducts } from './lib/helpers';
import { GET_PRODUCTS_QUERY } from './queries';
import { Product, ShopifyProductsOperation } from './types';

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyProductsOperation>({
    query: GET_PRODUCTS_QUERY,
    tags: [TAGS.products],
    variables: {
      query,
      reverse,
      sortKey
    }
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}
