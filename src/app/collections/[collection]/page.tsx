import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Container } from '@/components/ui/container';
import { defaultSort, sorting } from '@/lib/constants';
import { getCollection, getCollectionDerp, getCollectionProducts } from '@/lib/shopify';
import { CollectionEmpty } from './_components/collection-empty';
import { CollectionFilters } from './_components/collection-filters';
import { CollectionHeader } from './_components/collection-header';
import { CollectionProducts } from './_components/collection-products';
import { CollectionToolbar } from './_components/collection-toolbar';
import { CollectionProvider } from './collection-context';

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

  // const collection = await getCollection(params.collection);
  const collection = await getCollectionDerp({
    handle: params.collection,
    sortKey,
    reverse
  });

  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <CollectionProvider collection={collection} products={products}>
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
                  <Container>
                    <div className="pb-24 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-12">
                      <div className="hidden lg:col-span-3 xl:block">
                        <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 sticky top-40 -mx-3 h-[calc(100vh-12rem)] shrink-0 self-start overflow-y-scroll px-3">
                          <h3 className="mb-6 text-lg font-semibold">Filter &amp; Sort</h3>
                          <div className="rounded-lg bg-white p-6">
                            <CollectionFilters />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-9">
                        <CollectionProducts products={products} />
                      </div>
                    </div>
                  </Container>
                )}
              </div>
            </div>
          </>
        ) : (
          <div>no collection</div>
        )}
      </section>
    </CollectionProvider>
  );
}
