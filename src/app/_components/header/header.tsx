'use client';
import { Menu } from '@/lib/shopify/types';
import { clsx } from '@/utils';
import { forwardRef } from 'react';
import { DesktopHeader } from './_components/desktop-header';
import { MobileHeader } from './_components/mobile-header';

export type HeaderProps = {
  className?: string;
  fullWidth?: boolean;
  menu: Menu[];
};

export const Header = forwardRef<HTMLHtmlElement, HeaderProps>(
  ({ className, fullWidth = false, menu, ...rest }, forwardedRef) => {
    return (
      <>
        <header
          ref={forwardedRef}
          className={clsx('w-full border-b border-neutral-200 bg-white', className)}
          {...rest}
        >
          <MobileHeader menu={menu} />
          <DesktopHeader menu={menu} />
        </header>
      </>
    );
  }
);
