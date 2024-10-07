import { COLLECTION_PRODUCTS_HIDDEN_TAG, TAGS } from '@/app/constants';
import { shopifyFetch } from './lib/fetch';
import { removeEdgesAndNodes, reshapeCollections } from './lib/helpers';
import { GET_COLLECTIONS_QUERY } from './queries';
import { Collection, ShopifyCollectionsOperation } from './types';

export async function getCollections(filterHidden = true): Promise<Collection[]> {
  const res = await shopifyFetch<ShopifyCollectionsOperation>({
    query: GET_COLLECTIONS_QUERY,
    tags: [TAGS.collections]
  });
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);

  const reshapedCollection = reshapeCollections(shopifyCollections);
  // Filter out the collections that begin with `hidden`.
  return filterHidden
    ? reshapedCollection.filter(
        (collection) => !collection.handle.startsWith(COLLECTION_PRODUCTS_HIDDEN_TAG)
      )
    : reshapedCollection;
}
