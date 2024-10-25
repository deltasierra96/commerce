'use client';
import { Menu as ShopifyMenu } from '@/shopify/types';

import { useOverlayStore } from '@/app/store';
import { Icon } from '@/components/ui/icon';
import { Popover } from '@/components/ui/popover';
import { MenuItem as ShopifyMenuItem } from '@/shopify/types';
import { clsx } from '@/utils';
import { useState } from 'react';
import {
  Button,
  Link,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuTrigger,
  MenuTriggerProps,
  Separator,
  SubmenuTrigger
} from 'react-aria-components';

type NavigationMenuItemProps<T> = MenuItemProps<T> &
  Omit<MenuTriggerProps, 'children'> & {
    menuItem: ShopifyMenuItem;
    showViewAll?: boolean;
  };

const NavigationMenuItem = <T extends object>({
  menuItem,
  ...props
}: NavigationMenuItemProps<T>) => {
  const { title, url, items } = menuItem;
  return (
    <MenuItem
      {...props}
      href={url}
      className={
        'flex items-center rounded-md px-3 py-2 text-sm font-normal text-neutral-900 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
      }
      textValue={title}
    >
      {title}
      {items?.length ? <Icon icon="chevron-right" aria-hidden className="w-4 h-4 ml-auto" /> : null}
    </MenuItem>
  );
};

const NavigationMenuRootItemStyles = clsx(
  'flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
);

export const Navigation = ({ menu }: { menu: ShopifyMenu }) => {
  return (
    <div className="flex items-center space-x-2">
      {menu.items?.map((menuItem) => {
        const { id, title, url, items } = menuItem;
        const [isOpen, setIsOpen] = useState(false);
        const overlayStore = useOverlayStore();

        return items && items?.length === 0 ? (
          <Link key={id} href={url} className={NavigationMenuRootItemStyles}>
            {title}
          </Link>
        ) : (
          <MenuTrigger
            key={id}
            isOpen={isOpen}
            onOpenChange={(e) => {
              overlayStore.toggleOverlay();
              setIsOpen(e);
            }}
          >
            <Button className={clsx(NavigationMenuRootItemStyles)}>
              {menuItem.title}
              <Icon icon="chevron-down" className="w-4 h-4 ml-2 text-neutral-500" />
            </Button>
            <Popover offset={30}>
              <div className="p-2">
                <Menu className="outline-none">
                  {menuItem.items?.map((subMenuItem) =>
                    !subMenuItem.items?.length ? (
                      <NavigationMenuItem key={subMenuItem.id} menuItem={subMenuItem} />
                    ) : (
                      <SubmenuTrigger key={subMenuItem.id}>
                        <NavigationMenuItem menuItem={subMenuItem} />
                        <Popover>
                          <div className="p-2">
                            <Menu className="outline-none">
                              {subMenuItem.items?.map((subSubMenuItem) => (
                                <NavigationMenuItem
                                  key={subSubMenuItem.id}
                                  menuItem={subSubMenuItem}
                                />
                              ))}
                              <Separator className="block w-full h-px my-2 bg-neutral-100" />
                              <MenuItem
                                href={subMenuItem.url}
                                className={clsx(
                                  'flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
                                )}
                              >
                                View all {subMenuItem.title}
                              </MenuItem>
                            </Menu>
                          </div>
                        </Popover>
                      </SubmenuTrigger>
                    )
                  )}
                  <Separator className="block w-full h-px my-2 bg-neutral-100" />
                  <MenuItem
                    href={menuItem.url}
                    className={clsx(
                      'flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
                    )}
                  >
                    View all {menuItem.title}
                  </MenuItem>
                </Menu>
              </div>
            </Popover>
          </MenuTrigger>
        );
      })}
    </div>
  );
};
