import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { defaultSort, sorting } from '@/lib/constants';
import { getCollection, getCollectionProducts } from '@/lib/shopify';
import { CollectionEmpty } from './_components/collection-empty';
import { CollectionHeader } from './_components/collection-header';
import { CollectionProducts } from './_components/collection-products';
import { CollectionToolbar } from './_components/collection-toolbar';

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
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const collection = await getCollection(params.collection);
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  console.log('collection', collection);
  return (
    <section className="lg:py-12">
      {collection ? (
        <>
          <div className="divide-y divide-neutral-100 lg:space-y-8">
            <CollectionHeader collection={collection} />
            <CollectionToolbar collection={collection} />
            <div>
              {products.length === 0 ? (
                <CollectionEmpty />
              ) : (
                <CollectionProducts products={products} />
              )}
            </div>
          </div>
        </>
      ) : (
        <div>no collection</div>
      )}
    </section>
  );
}
