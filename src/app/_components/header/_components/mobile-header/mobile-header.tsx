import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Menu } from '@/shopify/types';
import { clsx } from '@/utils';
import { Account, Search } from './_components';

type MobileHeaderProps = {
  menu: Menu;
};

export const MobileHeader = ({ menu }: MobileHeaderProps) => {
  return (
    <div className={clsx('flex w-full items-center py-2 lg:hidden')}>
      <Container>
        <div className="flex items-center justify-between gap-x-8">
          <div className="flex basis-2/12 justify-start">
            {/* <Navigation menu={menu} /> */}
            <Search />
          </div>
          <div className="flex basis-2/12 items-center justify-center">
            <Logo className="h-8 sm:h-10" />
          </div>

          <div className="flex basis-2/12 justify-end">
            <Account />
            {/* <Cart /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};
