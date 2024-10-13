import { Menu } from '@/shopify/types';
import { clsx } from '@/utils';
import { DesktopHeader } from './_components/desktop-header';
import { MobileHeader } from './_components/mobile-header';

export type HeaderProps = {
  className?: string;
  menu: Menu;
};

export const Header = async ({ className, menu, ...rest }: HeaderProps) => {
  return (
    <header className={clsx('w-full border-b border-neutral-200 bg-white', className)} {...rest}>
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};
