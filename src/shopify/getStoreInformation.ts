import { shopifyFetch } from './lib/fetch';
import { GET_STORE_INFORMATION_QUERY } from './queries';
import { ShopifyStoreInformationOperation, StoreInformation } from './types';

export async function getStoreInformation(): Promise<StoreInformation> {
  const res = await shopifyFetch<ShopifyStoreInformationOperation>({
    query: GET_STORE_INFORMATION_QUERY,
    cache: 'no-store'
  });

  return res.body.data.shop;
}
