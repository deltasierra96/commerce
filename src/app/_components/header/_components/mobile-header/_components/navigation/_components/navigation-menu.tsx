'use client';
import { ButtonLink } from '@/components/ui/button';
import { Menu } from '@/shopify/types';
import { Link } from 'react-aria-components';

type NavigationMenuProps = {
  menu: Menu;
};

export const NavigationMenu = ({ menu, ...props }: NavigationMenuProps) => {
  return (
    <div className="space-y-4 p-6">
      {menu.items?.map((menuItem) => (
        <div key={menuItem.id}>
          <ButtonLink block href={menuItem.url}>
            {menuItem.title}
          </ButtonLink>
          {menuItem.items?.map((menuItemSub) => {
            return (
              <Link className={'flex'} key={menuItemSub.id} href={menuItemSub.url}>
                {menuItemSub.title}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};
