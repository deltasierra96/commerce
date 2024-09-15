'use client';
import { ButtonIcon, ButtonIconLink } from '@/components/ui/button-icon';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { SearchInput } from '@/components/ui/search-input';
import { ACCOUNT_ROUTE } from '@/lib/constants';
import { clsx } from '@/utils';
import React, { forwardRef } from 'react';
import { Cart } from '../cart';
import { MobileNav } from '../mobile-nav/mobile-nav';
import { Account } from './_components/account';
import { Favourites } from './_components/favourites';
import { Navigation } from './_components/navigation';
import { Search } from './_components/search';

export type HeaderProps = {
  className?: string;
  fullWidth?: boolean;
};

export const Header = forwardRef<HTMLHtmlElement, HeaderProps>(
  ({ className, fullWidth = true, ...rest }, forwardedRef) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
      <>
        <header
          ref={forwardedRef}
          className={clsx('w-full border-b border-neutral-200 bg-white', className)}
          {...rest}
        >
          <div className={clsx('flex w-full items-center py-2 lg:hidden')}>
            <Container fullWidth={fullWidth}>
              <div className="flex items-center justify-between gap-x-8">
                <div className="flex basis-2/12 justify-start">
                  <MobileNav />
                  <ButtonIcon icon="search" onPress={() => setOpen(true)} variant={'ghost'} />
                </div>
                <div className="flex basis-2/12 items-center justify-center">
                  <Logo className="h-8 sm:h-10" />
                </div>

                <div className="flex basis-2/12 justify-end">
                  <ButtonIconLink icon="user" variant={'ghost'} href={ACCOUNT_ROUTE} />
                  {/* <CartModal /> */}
                </div>
              </div>
            </Container>
          </div>
          <div className={clsx('hidden w-full lg:flex lg:flex-col')}>
            <Container fullWidth={fullWidth}>
              <div className="flex items-center justify-between gap-x-8 py-5">
                <div className="flex basis-2/12 justify-start">
                  <Logo className="h-10" />
                </div>

                <div className="flex basis-8/12 items-center justify-center">
                  <div className="mx-auto w-full max-w-screen-md">
                    <SearchInput
                      autoComplete="off"
                      hideLabel
                      name="search"
                      placeholder="What are you looking for today?"
                      onSelect={() => setOpen(true)}
                    />
                  </div>
                </div>
                <div className="flex basis-2/12 justify-end">
                  <div className="block sm:hidden">
                    <MobileNav />
                  </div>
                  <div className="hidden items-center justify-end space-x-2 sm:flex">
                    <div className="hidden sm:block">
                      <Favourites />
                    </div>
                    <div className="hidden sm:block">
                      <Account />
                    </div>
                    <div className="hidden sm:block">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <div className="border-t border-neutral-100 py-2">
              <Container fullWidth={fullWidth}>
                <Navigation />
              </Container>
            </div>
          </div>
        </header>
        <Search isOpen={isOpen} setOpen={setOpen} />
      </>
    );
  }
);
