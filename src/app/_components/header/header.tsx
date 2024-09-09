'use client';
import { ButtonIcon, ButtonIconLink } from '@/components/ui/button-icon';
import { Container } from '@/components/ui/container';
import { type IconTypeProps } from '@/components/ui/icon';
import { Logo } from '@/components/ui/logo';
import { SearchInput } from '@/components/ui/search-input';
import { ACCOUNT_ROUTE, STORE_ROUTE_COLLECTION } from '@/routes';
import { clsx } from '@/utils';
import React, { forwardRef } from 'react';
import { Link } from 'react-aria-components';
import { MobileNav } from '../mobile-nav/mobile-nav';
import { Account } from './_components/account';
import { Favourites } from './_components/favourites';
import { Search } from './_components/search';

export type HeaderProps = {
  className?: string;
};

export type NavItemType = {
  name: string;
  icon: IconTypeProps;
  href: string;
};

const navigation = [
  { name: "Women's", href: STORE_ROUTE_COLLECTION, current: false },
  { name: "Men's", href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Accessories', href: STORE_ROUTE_COLLECTION, current: false }
];

export const Header = forwardRef<HTMLHtmlElement, HeaderProps>(
  ({ className, ...rest }, forwardedRef) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
      <>
        <header
          ref={forwardedRef}
          className={clsx('w-full border-b border-neutral-200 bg-white', className)}
          {...rest}
        >
          <div className={clsx('flex w-full items-center py-4 lg:hidden')}>
            <Container fullWidth>
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
                  {/* <Cart title='Shopping cart' position={'bottom'} size={'lg'} /> */}
                </div>
              </div>
            </Container>
          </div>
          <div className={clsx('hidden w-full items-center py-2 sm:py-0 lg:flex')}>
            <Container fullWidth>
              <div className="flex items-center justify-between gap-x-8">
                <div className="flex items-center justify-start">
                  <Logo className="h-8 sm:h-10" />
                </div>
                <nav
                  className="hidden flex-1 justify-center sm:flex lg:space-x-6"
                  aria-label="Global"
                >
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={clsx(
                        'inline-flex items-center rounded-md px-3 py-6 font-heading text-sm font-bold uppercase outline-none',
                        'text-neutral-900 hover:text-neutral-500'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="hidden max-w-72 flex-1 lg:block">
                  <SearchInput
                    autoComplete="off"
                    hideLabel
                    name="search"
                    placeholder="What are you looking for today?"
                    onSelect={() => setOpen(true)}
                  />
                </div>
                <div className="flex justify-end">
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
                    <div className="hidden sm:block">{/* <Cart title='Your bag' /> */}</div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </header>
        <Search isOpen={isOpen} setOpen={setOpen} />
      </>
    );
  }
);
