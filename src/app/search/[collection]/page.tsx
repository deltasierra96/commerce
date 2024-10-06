import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductCard } from '@/app/_components/product-card';
import { COLLECTION_PRODUCTS_DEFAULT_SORTING, COLLECTION_PRODUCTS_SORTING } from '@/lib/constants';
import { getCollection } from '@/shopify/getCollection';
import { getCollectionProducts } from '@/shopify/getCollectionProducts';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CollectionPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    COLLECTION_PRODUCTS_SORTING.find((item) => item.slug === sort) ||
    COLLECTION_PRODUCTS_DEFAULT_SORTING;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <div className="grid grid-flow-row grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      )}
    </section>
  );
}
