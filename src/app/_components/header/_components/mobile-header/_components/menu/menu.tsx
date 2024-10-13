'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { Menu as ShopifyMenu } from '@/shopify/types';
import { NavigationMenu } from './_components/navigation-menu';

type MenuProps = {
  menu: ShopifyMenu;
};

export const Menu = ({ menu, ...props }: MenuProps) => {
  return (
    <Drawer position="left" size={'lg'} {...props}>
      <ButtonIcon aria-label="Open mobile navigation" icon="menu" variant="ghost" color="neutral" />
      <Drawer.Content>
        <div className="flex flex-col h-full">
          <DialogHeader>Menu</DialogHeader>
          <div className="flex flex-col flex-1 min-h-0 overflow-y-scroll scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200">
            <NavigationMenu menu={menu} />
          </div>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
