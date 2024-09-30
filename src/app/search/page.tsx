import { COLLECTION_PRODUCTS_DEFAULT_SORTING, COLLECTION_PRODUCTS_SORTING } from '@/lib/constants';
import { getProducts } from '@/lib/shopify';
import { ProductCard } from '../_components/product-card';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    COLLECTION_PRODUCTS_SORTING.find((item) => item.slug === sort) ||
    COLLECTION_PRODUCTS_DEFAULT_SORTING;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <div className="grid grid-flow-row grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {products.map(async (product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      ) : null}
    </>
  );
}
