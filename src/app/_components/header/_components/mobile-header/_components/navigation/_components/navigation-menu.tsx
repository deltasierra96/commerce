'use client';
import { Menu } from '@/shopify/types';
import { Link } from 'react-aria-components';

type NavigationMenuProps = {
  menu: Menu;
};

export const NavigationMenu = ({ menu, ...props }: NavigationMenuProps) => {
  return (
    <div className="divide-y divide-neutral-100">
      {menu.items?.map((menuItem) => (
        <div className="space-y-4 p-4" key={menuItem.id}>
          <Link className={'flex underline'} href={menuItem.url}>
            {menuItem.title}
          </Link>
          {menuItem.items?.map((menuItemSub) => {
            return (
              <div className="bg-red-50 pl-5">
                <Link className={'flex py-2'} key={menuItemSub.id} href={menuItemSub.url}>
                  {menuItemSub.title}
                </Link>

                <div className="bg-green-50 pl-10">
                  {menuItemSub.items?.map((menuItemSubSub) => {
                    return (
                      <Link
                        className={'flex py-2'}
                        key={menuItemSubSub.id}
                        href={menuItemSubSub.url}
                      >
                        {menuItemSubSub.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
