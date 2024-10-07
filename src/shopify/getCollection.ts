import { TAGS } from '@/app/constants';
import { shopifyFetch } from './lib/fetch';
import { reshapeCollection } from './lib/helpers';
import { GET_COLLECTION_QUERY } from './queries';
import { Collection, ShopifyCollectionOperation } from './types';

export async function getCollection(handle: string): Promise<Collection | undefined> {
  const res = await shopifyFetch<ShopifyCollectionOperation>({
    query: GET_COLLECTION_QUERY,
    tags: [TAGS.collections],
    variables: {
      handle
    }
  });

  return reshapeCollection(res.body.data.collection);
}
