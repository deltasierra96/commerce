import { MAIN_MENU_HANDLE } from '@/app/constants';
import { getMenu } from '@/shopify/getMenu';
import { DesktopHeader } from './_components/desktop-header';
import { MobileHeader } from './_components/mobile-header';

type HeaderProps = Object;

export const Header = async ({ ...props }: HeaderProps) => {
  const menu = await getMenu(MAIN_MENU_HANDLE);

  return (
    <>
      <DesktopHeader menu={menu} />
      <MobileHeader menu={menu} />
    </>
  );
};
