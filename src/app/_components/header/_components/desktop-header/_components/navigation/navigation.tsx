import { MAIN_MENU_HANDLE } from '@/app/constants';
import { getMenu } from '@/shopify/getMenu';
import { TestMenu } from './_components/test-menu';

export const Navigation = async () => {
  const menu = await getMenu(MAIN_MENU_HANDLE);

  return (
    <TestMenu menu={menu} />
    // <nav aria-label="Global navigation">
    //   <ul className="flex lg:space-x-4">
    //     <li>{menu.items?.map((item) => <NavigationMenuItem item={item} />)}</li>
    //   </ul>
    // </nav>
  );
};
