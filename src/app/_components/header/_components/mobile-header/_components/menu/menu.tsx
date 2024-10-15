'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { Menu as ShopifyMenu } from '@/shopify/types';
import { NavigationMenu } from './_components/navigation-menu';
import { Derp } from './_components/navigation-menu-3';

type MenuProps = {
  menu: ShopifyMenu;
};

export const Menu = ({ menu, ...props }: MenuProps) => {
  return (
    <Drawer position="left" size={'lg'} {...props}>
      <ButtonIcon aria-label="Open mobile navigation" icon="menu" variant="ghost" color="neutral" />
      <Drawer.Content>
        <div className="flex h-full flex-col">
          <DialogHeader>Menu</DialogHeader>
          <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <NavigationMenu menu={menu} />
            <Separator />
            <Derp menu={menu} />
          </div>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
