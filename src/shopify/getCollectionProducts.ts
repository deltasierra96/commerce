import {
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables,
  ProductCollectionSortKeys
} from '@/__generated__/graphql';
import { query } from '@/lib/apollo-client';
import { TAGS } from '@/lib/constants';
import { ApolloQueryResult } from '@apollo/client';
import { GET_COLLECTION_PRODUCTS_QUERY } from './queries';

export type GetCollectionProductsProps = {
  handle: string;
  limit?: number;
  reverse: boolean;
  sortKey?: ProductCollectionSortKeys;
};

export const getCollectionProducts = async ({
  handle,
  limit = 100,
  reverse,
  sortKey
}: GetCollectionProductsProps): Promise<ApolloQueryResult<GetCollectionProductsQuery>> =>
  await query<GetCollectionProductsQuery, GetCollectionProductsQueryVariables>({
    query: GET_COLLECTION_PRODUCTS_QUERY,
    variables: { handle: handle, limit, reverse, sortKey },
    context: {
      next: {
        tags: TAGS.products
      }
    }
  });
