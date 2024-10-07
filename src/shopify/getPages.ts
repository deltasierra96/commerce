import { shopifyFetch } from './lib/fetch';
import { removeEdgesAndNodes } from './lib/helpers';
import { GET_PAGES_QUERY } from './queries';
import { Page, ShopifyPagesOperation } from './types';

export async function getPages(): Promise<Page[]> {
  const res = await shopifyFetch<ShopifyPagesOperation>({
    query: GET_PAGES_QUERY,
    cache: 'no-store'
  });

  return removeEdgesAndNodes(res.body.data.pages);
}
