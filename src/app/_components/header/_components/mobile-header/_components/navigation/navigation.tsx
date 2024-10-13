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
        <DialogHeader>Navigation</DialogHeader>
        <NavigationMenu menu={menu} />
      </Drawer.Content>
    </Drawer>
  );
};
