import { useFragment } from '@/__generated__';
import {
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables,
  ProductFragmentDoc
} from '@/__generated__/graphql';
import { GET_COLLECTION_PRODUCTS } from '@/graphql/queries.graphql';
import { query } from '@/lib/apollo-client';
import { STORE_ROUTE_PRODUCT } from '@/lib/constants';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });
  const products = await query<GetCollectionProductsQuery, GetCollectionProductsQueryVariables>({
    query: GET_COLLECTION_PRODUCTS,
    variables: { handle: 'hidden-homepage-carousel', limit: 10 }
  });
  if (!products?.data) return null;

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="animate-carousel flex gap-4">
        {products.data.collection?.products.edges.map((productFragment, i) => {
          const product = useFragment(ProductFragmentDoc, productFragment.node);
          return (
            <li
              key={`${product.handle}${i}`}
              className="aspect-square relative h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
            >
              <Link
                href={`${STORE_ROUTE_PRODUCT}/${product.handle}`}
                className="relative h-full w-full"
              >
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
