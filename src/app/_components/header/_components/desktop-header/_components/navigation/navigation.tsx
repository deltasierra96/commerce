import { MAIN_MENU_HANDLE } from '@/app/constants';
import { getMenu } from '@/shopify/getMenu';
import { NavigationMenu } from './_components/navigation-menu-hover';

export const Navigation = async () => {
  const menu = await getMenu(MAIN_MENU_HANDLE);

  return <NavigationMenu menu={menu} />;
};
