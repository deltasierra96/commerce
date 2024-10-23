'use client';
import { Cart } from '@/app/_components/cart';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Menu as ShopfiyMenu } from '@/shopify/types';
import { clsx } from '@/utils';
import { forwardRef } from 'react';
import { Menu, Search } from '../mobile-header/_components';
import { Account, Navigation } from './_components';

type DesktopHeaderProps = {
  menu: ShopfiyMenu;
};

export const DesktopHeader = forwardRef<HTMLElement, DesktopHeaderProps>(
  ({ menu, ...props }, ref) => {
    return (
      <header
        className={clsx('w-full border-b border-neutral-200 bg-white lg:flex lg:flex-col')}
        ref={ref}
        {...props}
      >
        <Container>
          <div className="flex items-center justify-between gap-x-8 py-5">
            <div className="flex basis-2/12 justify-start">
              <Logo className="h-10" />
              <Menu menu={menu} />
            </div>

            <div className="flex basis-8/12 items-center justify-center">
              <div className="mx-auto w-full max-w-screen-md">
                <Navigation menu={menu} />
              </div>
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
      </header>
    );
  }
);
