import {
  GetCollectionMetaDataQuery,
  GetCollectionMetaDataQueryVariables
} from '@/__generated__/graphql';
import { query } from '@/lib/apollo-client';
import { TAGS } from '@/lib/constants';
import { ApolloQueryResult } from '@apollo/client';
import { GET_COLLECTION_META_DATA_QUERY } from './queries/collection';

export const getCollectionMetaData = async (
  handle: string
): Promise<ApolloQueryResult<GetCollectionMetaDataQuery>> =>
  await query<GetCollectionMetaDataQuery, GetCollectionMetaDataQueryVariables>({
    query: GET_COLLECTION_META_DATA_QUERY,
    variables: { handle },
    fetchPolicy: 'no-cache',
    context: {
      next: {
        tags: TAGS.collections
      }
    }
  });
