'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { Menu } from '@/shopify/types';
import { NavigationMenu } from './_components/navigation-menu';

type NavigationProps = {
  menu: Menu;
};

export const Navigation = ({ menu, ...props }: NavigationProps) => {
  return (
    <Drawer position="left" size={'lg'} {...props}>
      <ButtonIcon aria-label="Open mobile navigation" icon="menu" variant="ghost" color="neutral" />
      <Drawer.Content>
        <div className="flex h-full flex-col">
          <DialogHeader>Navigation</DialogHeader>
          <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <NavigationMenu menu={menu} />
          </div>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
