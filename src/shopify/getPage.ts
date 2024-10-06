import { shopifyFetch } from './fetch';
import { GET_PAGE_QUERY } from './queries';
import { Page, ShopifyPageOperation } from './types';

export async function getPage(handle: string): Promise<Page> {
  const res = await shopifyFetch<ShopifyPageOperation>({
    query: GET_PAGE_QUERY,
    cache: 'no-store',
    variables: { handle }
  });

  return res.body.data.pageByHandle;
}
