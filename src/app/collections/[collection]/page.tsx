import { useFragment } from '@/__generated__';
import {
  CollectionFragmentDoc,
  GetCollectionQuery,
  GetCollectionQueryVariables
} from '@/__generated__/graphql';
import { Container } from '@/components/ui/container';
import { query } from '@/lib/apollo-client';
import { GET_COLLECTION_QUERY, getCollectionMetaData } from '@/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { CollectionFilters } from './_components/collection-filters';
import { CollectionHeader } from './_components/collection-header';
import { CollectionProducts } from './_components/collection-products';
import { CollectionToolbar } from './_components/collection-toolbar';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const metaData = await getCollectionMetaData(params.collection);

  if (!metaData) return notFound();

  return {
    title: metaData.data.collection?.seo.title || metaData.data?.collection?.title,
    description:
      metaData.data.collection?.seo.description ||
      metaData.data.collection?.description ||
      `${metaData.data.collection?.title} products`
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
  const collectionQuery = await query<GetCollectionQuery, GetCollectionQueryVariables>({
    query: GET_COLLECTION_QUERY,
    variables: { handle: params.collection }
  });

  const collection = useFragment(CollectionFragmentDoc, collectionQuery.data.collection);

  if (!collection) notFound();

  return (
    <section className="py-12">
      <Suspense
        fallback={
          <Container>
            <div className="rounded-lg bg-white md:h-[18rem] lg:h-[15rem] xl:h-[22rem]">
              <Container>
                <div className="py-4">
                  <div className="space-y-2">
                    <div className="h-4 animate-pulse rounded-md bg-neutral-200" />
                    <div className="h-4 animate-pulse rounded-md bg-neutral-200" />
                    <div className="h-4 animate-pulse rounded-md bg-neutral-200" />
                  </div>
                </div>
              </Container>
            </div>
          </Container>
        }
      >
        <CollectionHeader params={params} />
      </Suspense>
      <div className="divide-y divide-neutral-100 lg:space-y-8">
        <CollectionToolbar collection={collection} />
        <div>
          <Container className="px-0 sm:px-0">
            <div className="pb-24 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-12">
              <div className="hidden lg:col-span-3 xl:block">
                <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 sticky top-40 -mx-3 h-[calc(100vh-12rem)] shrink-0 self-start overflow-y-scroll px-3">
                  <div className="rounded-lg bg-white p-6">
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
      </div>
    </section>
  );
}
