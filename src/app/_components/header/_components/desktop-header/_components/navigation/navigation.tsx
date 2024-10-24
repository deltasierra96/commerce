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
  LinkProps,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuTrigger,
  MenuTriggerProps,
  Separator,
  SubmenuTrigger
} from 'react-aria-components';

const NavigationMenuButtonStyles = clsx(
  'flex items-center rounded-md px-3 py-2 text-sm font-semibold text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
);

type NavigationMenuButtonLinkProps = LinkProps & {
  menuItem: ShopifyMenuItem;
};

const NavigationMenuButtonLink = ({ menuItem }: NavigationMenuButtonLinkProps) => {
  const { title, url } = menuItem;
  return (
    <Link href={url} className={NavigationMenuButtonStyles}>
      {title}
    </Link>
  );
};

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
    <MenuItem {...props} href={url} className={NavigationMenuButtonStyles} textValue={title}>
      {title}
      {items?.length ? <Icon icon="chevron-right" aria-hidden className="ml-auto h-4 w-4" /> : null}
    </MenuItem>
  );
};

type NavigationMenuButtonProps = {
  menuItem: ShopifyMenuItem;
};

const NavigationMenuButton = ({ menuItem, ...props }: NavigationMenuButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayStore = useOverlayStore();

  return (
    <MenuTrigger
      isOpen={isOpen}
      onOpenChange={(e) => {
        overlayStore.toggleOverlay();
        setIsOpen(e);
      }}
    >
      <Button {...props} className={clsx(NavigationMenuButtonStyles)}>
        {menuItem.title}
        <Icon icon="chevron-down" className="ml-2 h-4 w-4 text-neutral-500" />
      </Button>
      <Popover offset={30}>
        <div className="p-2">
          <Menu className="outline-none">
            {menuItem.items?.map((subMenuItem) =>
              !subMenuItem.items?.length ? (
                <NavigationMenuItem key={subMenuItem.id} menuItem={subMenuItem} />
              ) : (
                <SubmenuTrigger>
                  <NavigationMenuItem key={subMenuItem.id} menuItem={subMenuItem} />
                  <Popover>
                    <div className="p-2">
                      <Menu className="outline-none">
                        {subMenuItem.items?.map((subSubMenuItem) => (
                          <NavigationMenuItem key={subSubMenuItem.id} menuItem={subSubMenuItem} />
                        ))}
                        <Separator className="my-2 block h-px w-full bg-neutral-100" />
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
            <Separator className="my-2 block h-px w-full bg-neutral-100" />
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
};

export const Navigation = ({ menu }: { menu: ShopifyMenu }) => {
  return (
    <div className="flex items-center space-x-2">
      {menu.items?.map((menuItem) =>
        menuItem.items && menuItem.items?.length !== 0 ? (
          <NavigationMenuButton key={menuItem.id} menuItem={menuItem} />
        ) : (
          <NavigationMenuButtonLink key={menuItem.id} menuItem={menuItem} />
        )
      )}
    </div>
  );
};
