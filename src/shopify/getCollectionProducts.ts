import { TAGS } from '@/lib/constants';
import { shopifyFetch } from './fetch';
import { removeEdgesAndNodes, reshapeProducts } from './helpers';
import { GET_COLLECTION_PRODUCTS_QUERY } from './queries';
import { Connection, Product, ShopifyProduct } from './types';

export type ShopifyCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopifyProduct>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
    limit?: number;
  };
};

export type GetCollectionProductsProps = {
  handle: string;
  limit?: number;
  reverse: boolean;
  sortKey?: string;
};

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
  limit = 100
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
  limit?: number;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: GET_COLLECTION_PRODUCTS_QUERY,
    tags: [TAGS.collections, TAGS.products],
    variables: {
      handle: collection,
      reverse,
      limit,
      sortKey: sortKey === 'CREATED_AT' ? 'CREATED' : sortKey
    }
  });

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));
}
