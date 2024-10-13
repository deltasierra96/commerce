'use client';
import { ButtonLink } from '@/components/ui/button';
import { Menu } from '@/shopify/types';

type NavigationMenuProps = {
  menu: Menu;
};

export const NavigationMenu = ({ menu, ...props }: NavigationMenuProps) => {
  return (
    <div className="space-y-4 p-6">
      {menu.items?.map((menuItem) => (
        <ButtonLink key={menuItem.title} block href={menuItem.url}>
          {menuItem.title}
        </ButtonLink>
      ))}
    </div>
  );
};
