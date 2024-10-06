import { TAGS } from '@/lib/constants';
import { SHOPIFY_STORE_DOMAIN, shopifyFetch } from './fetch';
import { GET_MENU_QUERY } from './queries/menu';
import { Menu, ShopifyMenuOperation } from './types';

export async function getMenu(handle: string): Promise<Menu[]> {
  const res = await shopifyFetch<ShopifyMenuOperation>({
    query: GET_MENU_QUERY,
    tags: [TAGS.collections],
    variables: {
      handle
    }
  });

  return (
    res.body?.data?.menu?.items.map((item: { title: string; url: string }) => ({
      title: item.title,
      path: item.url.replace(SHOPIFY_STORE_DOMAIN, '')
    })) || []
  );
}
