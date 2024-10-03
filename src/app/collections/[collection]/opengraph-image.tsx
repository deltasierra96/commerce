import { useFragment } from '@/__generated__';
import {
  CollectionFragmentDoc,
  GetCollectionQuery,
  GetCollectionQueryVariables,
  SeoFragmentDoc
} from '@/__generated__/graphql';
import OpengraphImage from '@/app/_components/opengraph-image';
import { query } from '@/lib/apollo-client';
import { GET_COLLECTION_QUERY } from '@/shopify';

export const runtime = 'edge';

export default async function Image({ params }: { params: { collection: string } }) {
  const collectionQuery = await query<GetCollectionQuery, GetCollectionQueryVariables>({
    query: GET_COLLECTION_QUERY,
    variables: { handle: params.collection }
  });

  const collection = useFragment(CollectionFragmentDoc, collectionQuery.data.collection);

  const collectionSeo = useFragment(SeoFragmentDoc, collection?.seo);

  const title = collectionSeo?.title || collection?.title;

  return await OpengraphImage({ title });
}
