import {
  GetCollectionHeaderQuery,
  GetCollectionHeaderQueryVariables
} from '@/__generated__/graphql';
import { query } from '@/lib/apollo-client';
import { TAGS } from '@/lib/constants';
import { ApolloQueryResult } from '@apollo/client';
import { GET_COLLECTION_HEADER_QUERY } from './queries/collection';

export const getCollectionHeader = async (
  handle: string
): Promise<ApolloQueryResult<GetCollectionHeaderQuery>> =>
  await query<GetCollectionHeaderQuery, GetCollectionHeaderQueryVariables>({
    query: GET_COLLECTION_HEADER_QUERY,
    variables: { handle },
    context: {
      next: {
        tags: TAGS.collections
      }
    }
  });
