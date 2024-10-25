import { Container } from '@/components/ui/container';
import { getCollection } from '@/shopify/getCollection';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { CollectionFilters } from './_components/collection-filters';
import { CollectionHeader } from './_components/collection-header';
import { CollectionHeaderSkeleton } from './_components/collection-header/collection-header.skeleton';
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

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function CollectionPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: SearchParams;
}) {
  const collection = await getCollection(params.collection);

  if (!collection) notFound();

  return (
    <section className="pb-12">
      <Suspense fallback={<CollectionHeaderSkeleton />}>
        <CollectionHeader collection={collection} />
      </Suspense>
      <CollectionToolbar collection={collection} />
      <div className="pt-6">
        <Container className="px-0 sm:px-0">
          <div className="pb-24 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-12">
            <div className="hidden lg:col-span-3 xl:block">
              <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 sticky top-40 -mx-3 h-[calc(100vh-12rem)] shrink-0 self-start overflow-y-scroll px-3">
                <div className="p-6 bg-white rounded-lg">
                  <CollectionFilters />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <Suspense fallback={<p>loading</p>}>
                <CollectionProducts params={params} searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
