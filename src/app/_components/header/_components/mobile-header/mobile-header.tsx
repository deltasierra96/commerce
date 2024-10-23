'use client';
import { Cart } from '@/app/_components/cart';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Menu as ShopifyMenu } from '@/shopify/types';
import { clsx } from '@/utils';
import { forwardRef } from 'react';
import { Account, Menu, Search } from './_components';

type MobileHeaderProps = {
  menu: ShopifyMenu;
};

export const MobileHeader = forwardRef<HTMLElement, MobileHeaderProps>(
  ({ menu, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={clsx('flex w-full items-center border-b border-neutral-200 bg-white py-2')}
      >
        <Container>
          <div className="flex items-center justify-between gap-x-8">
            <div className="flex basis-2/12 justify-start">
              <Menu menu={menu} />
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
      </header>
    );
  }
);
