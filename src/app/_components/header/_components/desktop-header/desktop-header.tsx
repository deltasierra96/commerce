import { Cart } from '@/app/_components/cart';
import { MAIN_MENU_HANDLE } from '@/app/constants';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { getMenu } from '@/shopify/getMenu';
import { clsx } from '@/utils';
import { Menu, Search } from '../mobile-header/_components';
import { Account, Navigation } from './_components';

type DesktopHeaderProps = Object;

export const DesktopHeader = async ({ ...props }: DesktopHeaderProps) => {
  const menu = await getMenu(MAIN_MENU_HANDLE);

  return (
    <div className={clsx('hidden w-full lg:flex lg:flex-col')}>
      <Container>
        <div className="flex items-center justify-between gap-x-8 py-5">
          <div className="flex basis-2/12 justify-start">
            <Logo className="h-10" />
            <Menu menu={menu} />
          </div>

          <div className="flex basis-8/12 items-center justify-center">
            <div className="mx-auto w-full max-w-screen-md">{/* <Search /> */}</div>
          </div>
          <div className="flex basis-2/12 justify-end">
            <div className="hidden items-center justify-end space-x-2 sm:flex">
              <Account />
              <Search />
              <Cart />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-neutral-100 py-1.5">
        <Container>
          <Navigation />
        </Container>
      </div>
    </div>
  );
};
