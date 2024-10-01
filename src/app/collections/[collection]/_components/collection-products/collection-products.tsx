import { useFragment } from '@/__generated__';
import {
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables,
  ProductFragmentDoc
} from '@/__generated__/graphql';
import { ProductCard } from '@/app/_components/product-card';
import { GET_COLLECTION_PRODUCTS } from '@/graphql/queries.graphql';
import { query } from '@/lib/apollo-client';
import {
  COLLECTION_PRODUCTS_DEFAULT_LIMIT,
  COLLECTION_PRODUCTS_DEFAULT_SORTING,
  COLLECTION_PRODUCTS_LIMIT,
  COLLECTION_PRODUCTS_SORTING
} from '@/lib/constants';
import { getCollectionProducts } from '@/lib/shopify';
import { clsx } from '@/utils';

type CollectionProductsProps = {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export const CollectionProducts = async ({ params, searchParams }: CollectionProductsProps) => {
  const { sort, limit } = searchParams as { [key: string]: string };

  const { sortKey, reverse } =
    COLLECTION_PRODUCTS_SORTING.find((item) => item.slug === sort) ||
    COLLECTION_PRODUCTS_DEFAULT_SORTING;

  const limitAmount =
    COLLECTION_PRODUCTS_LIMIT.find((item) => item.toString() === limit) ||
    COLLECTION_PRODUCTS_DEFAULT_LIMIT;

  const { data, loading } = await query<
    GetCollectionProductsQuery,
    GetCollectionProductsQueryVariables
  >({
    query: GET_COLLECTION_PRODUCTS,
    variables: { handle: params.collection, limit: 2, reverse }
  });

  const collectionProducts = await getCollectionProducts({
    sortKey,
    limit: limitAmount,
    reverse,
    collection: params.collection
  });

  return (
    <div className="grid grid-flow-row grid-cols-2 border-l border-neutral-100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-4">
      {loading ? 'loading' : 'complete'}
      {data.collection?.products.edges?.map((p) => {
        const product = useFragment(ProductFragmentDoc, p.node);
        return (
          <ProductCard
            key={product.id}
            product={product}
            className={clsx(
              'max-lg:border-b',
              'lg:rounded-lg',
              'border-neutral-100 bg-white px-4 transition-all duration-75 lg:mx-0 lg:data-[hovered=true]:shadow-lg',
              'lg:data-[hovered=true]:shadow-neutral-950/5',
              'max-lg:border-b',
              'max-md:odd:border-r',
              'md:border-r',
              'md:[&:nth-child(3)]:border-r-0'
            )}
          />
        );
      })}
    </div>
  );
};
