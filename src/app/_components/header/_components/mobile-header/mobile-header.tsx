import { Cart } from '@/app/_components/cart';
import { MAIN_MENU_HANDLE } from '@/app/constants';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { getMenu } from '@/shopify/getMenu';
import { clsx } from '@/utils';
import { Account, Navigation, Search } from './_components';

type MobileHeaderProps = Object;

export const MobileHeader = async ({ ...props }: MobileHeaderProps) => {
  const menu = await getMenu(MAIN_MENU_HANDLE);

  return (
    <div className={clsx('flex w-full items-center py-2 lg:hidden')}>
      <Container>
        <div className="flex items-center justify-between gap-x-8">
          <div className="flex basis-2/12 justify-start">
            <Navigation menu={menu} />
            <Search />
          </div>
          <div className="flex basis-2/12 items-center justify-center">
            <Logo className="h-8 sm:h-10" />
          </div>

          <div className="flex basis-2/12 justify-end">
            <Account />
            <Cart />
          </div>
        </div>
      </Container>
    </div>
  );
};
