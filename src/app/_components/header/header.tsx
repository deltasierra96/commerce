'use client';
import { MenuItem } from '@/shopify';
import { clsx } from '@/utils';
import { DesktopHeader } from './_components/desktop-header';
import { MobileHeader } from './_components/mobile-header';

export type HeaderProps = {
  className?: string;
  menu: MenuItem[];
};

export const Header = async ({ className, menu, ...rest }: HeaderProps) => {
  return (
    <header className={clsx('w-full border-b border-neutral-200 bg-white', className)} {...rest}>
      <MobileHeader menu={menu} />
      <DesktopHeader menu={menu} />
    </header>
  );
};
