import {
  GetMenuQuery,
  GetMenuQueryVariables,
  MenuItem as MenuItemCodeGen
} from '@/__generated__/graphql';
import { query } from '@/lib/apollo-client';
import { ensureStartsWith } from '@/lib/utils';
import { GET_MENU_QUERY } from './queries/menu';

export type MenuItem = Pick<MenuItemCodeGen, 'title' | 'url'>;

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
  : '';

export const getMenu = async (handle: string): Promise<MenuItem[]> => {
  const menu = await query<GetMenuQuery, GetMenuQueryVariables>({
    query: GET_MENU_QUERY,
    variables: { handle }
  });
  return (
    menu.data.menu?.items.map((item) => {
      return {
        title: item.title,
        url: item.url.replace(domain, '')
      };
    }) || []
  );
};
