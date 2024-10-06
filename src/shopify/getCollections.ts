import { TAGS } from '@/lib/constants';
import { shopifyFetch } from './fetch';
import { removeEdgesAndNodes, reshapeCollections } from './helpers';
import { GET_COLLECTIONS_QUERY } from './queries';
import { Collection, ShopifyCollectionsOperation } from './types';

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<ShopifyCollectionsOperation>({
    query: GET_COLLECTIONS_QUERY,
    tags: [TAGS.collections]
  });
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
  const collections = [
    {
      handle: '',
      title: 'All',
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products'
      },
      path: '/search',
      updatedAt: new Date().toISOString()
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith('hidden')
    )
  ];

  return collections;
}
