import { Container } from '@/components/ui/container';
import { getCollections } from '@/shopify/getCollections';
import { clsx } from '@/utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { CollectionCard } from './_components/collection-card';

export async function generateMetadata(): Promise<Metadata> {
  const collections = await getCollections();

  if (!collections) return notFound();

  return {
    title: 'Collections',
    description: 'Browse all available collections.'
  };
}

const collectionGridStyles = clsx(
  'grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8'
);

const Collections = async () => {
  const collections = await getCollections();
  return (
    <>
      {collections.length === 0 ? (
        <p className="py-3 text-lg">{`No collections found.`}</p>
      ) : (
        <div className={clsx(collectionGridStyles)}>
          {collections.map((collection) => {
            return <CollectionCard key={collection.handle} collection={collection} />;
          })}
        </div>
      )}
    </>
  );
};

const CollectionPageLoadingSkeleton = () => (
  <div className={clsx(collectionGridStyles)}>
    {Array.from({ length: 18 }).map((i) => {
      return (
        <div className="animate-pulse rounded-card bg-white p-4">
          <div className="aspect-h-1 aspect-w-1 flex items-center justify-center overflow-hidden rounded-card bg-neutral-100 group-hover:opacity-75" />
          <div className="mt-4 h-4 w-full rounded-card bg-neutral-100" />
        </div>
      );
    })}
  </div>
);

const CollectionsPage = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-row items-end justify-between gap-8 pb-8 md:pb-12">
          <h1 className="tracking-heading font-heading text-7xl">Collections</h1>
        </div>
        <Suspense fallback={<CollectionPageLoadingSkeleton />}>
          <Collections />
        </Suspense>
      </Container>
    </section>
  );
};

export default CollectionsPage;
