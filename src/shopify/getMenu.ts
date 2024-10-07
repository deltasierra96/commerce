import { COLLECTION_PATH, PAGE_PATH, PRODUCT_PATH, TAGS } from '@/app/constants';
import { SHOPIFY_STORE_DOMAIN, shopifyFetch } from './lib/fetch';
import { GET_MENU_QUERY } from './queries/menu';
import { Menu, ShopifyMenuOperation } from './types';

const reshapeMenuItemUrl = (url: string) =>
  url
    ? url
        .replace(SHOPIFY_STORE_DOMAIN, '')
        .replace('/collections', COLLECTION_PATH)
        .replace('/pages', PAGE_PATH)
        .replace('/products', PRODUCT_PATH)
    : url;

export async function getMenu(handle: string): Promise<Menu> {
  const res = await shopifyFetch<ShopifyMenuOperation>({
    query: GET_MENU_QUERY,
    tags: [TAGS.collections],
    variables: {
      handle
    },
    cache: 'no-store'
  });

  const { id, items, title, url } = res.body.data.menu;

  // Manually map over three levels as Shopify only facilitates up to 3 levels deep, eg. Home > Account > User

  return (
    {
      id,
      title,
      url: reshapeMenuItemUrl(url),
      items: items?.map((item) => {
        const { id, items, title, url } = item;
        return (
          {
            id,
            title,
            url: reshapeMenuItemUrl(url),
            items: items?.map((subItem) => {
              const { id, items, title, url } = subItem;
              return (
                {
                  id,
                  title,
                  url: reshapeMenuItemUrl(url),
                  items: items?.map((subItem) => {
                    const { id, title, url } = subItem;
                    return (
                      {
                        id,
                        title,
                        url: reshapeMenuItemUrl(url)
                      } || []
                    );
                  })
                } || []
              );
            })
          } || []
        );
      })
    } || []
  );
}
