'use client';
import { ButtonLink } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { MenuItem } from '@/shopify';

type NavigationProps = {
  menu: MenuItem[];
};

export const Navigation = ({ menu, ...props }: NavigationProps) => {
  return (
    <Drawer position="left" size={'lg'} {...props}>
      <ButtonIcon aria-label="Open mobile navigation" icon="menu" variant="ghost" color="neutral" />
      <Drawer.Content>
        <DialogHeader>Navigation</DialogHeader>
        <div className="space-y-4 p-6">
          {menu.map((menuItem) => (
            <ButtonLink key={menuItem.title} block href={menuItem.url}>
              {menuItem.title}
            </ButtonLink>
          ))}
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
