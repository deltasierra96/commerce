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
  MenuProps,
  MenuTrigger,
  MenuTriggerProps,
  Separator,
  SubmenuTrigger
} from 'react-aria-components';

const NavigationMenuButtonStyles = clsx(
  'flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
);

type NavigationMenuBlockProps = {
  menuItem: ShopifyMenuItem;
};

type NavigationMenuButtonProps<T> = MenuProps<T> &
  Omit<MenuTriggerProps, 'children'> & {
    menuItem: ShopifyMenuItem;
  };

type NavigationMenuItemProps<T> = MenuItemProps<T> &
  Omit<MenuTriggerProps, 'children'> & {
    menuItem: ShopifyMenuItem;
    showViewAll?: boolean;
  };

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

const NavigationMenuItem = <T extends object>({ menuItem }: NavigationMenuItemProps<T>) => {
  const { title, url, items } = menuItem;
  return (
    <MenuItem href={url} className={NavigationMenuButtonStyles} textValue={title}>
      {title}
      {items?.length ? <Icon icon="chevron-right" aria-hidden className="ml-auto h-4 w-4" /> : null}
    </MenuItem>
  );
};

type NavigationMenuDropdownProps = {
  menuItem: ShopifyMenuItem;
};

const NavigationMenuDropdown = ({ menuItem }: NavigationMenuDropdownProps) => {
  return (
    <Popover>
      <div className="p-2">
        <Menu className="outline-none">
          {menuItem.items?.map((subMenuItem) =>
            !subMenuItem.items?.length ? (
              <NavigationMenuItem menuItem={subMenuItem} />
            ) : (
              <SubmenuTrigger>
                <NavigationMenuItem menuItem={subMenuItem} />
                <Popover>
                  <div className="p-2">
                    <Menu className="outline-none">
                      {subMenuItem.items?.map((subSubMenuItem) => (
                        <NavigationMenuItem menuItem={subSubMenuItem} />
                      ))}
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
  );
};

type NavigationMenuPanelProps = {
  menuItem: ShopifyMenuItem;
};

const NavigationMenuPanel = ({ menuItem }: NavigationMenuPanelProps) => {
  return (
    <Popover>
      <div className="p-2">
        <Menu className="outline-none">
          {menuItem.items?.map((subMenuItem) =>
            !subMenuItem.items?.length ? (
              <NavigationMenuItem menuItem={subMenuItem} />
            ) : (
              <SubmenuTrigger>
                <NavigationMenuItem menuItem={subMenuItem} />
                <Popover>
                  <div className="p-2">
                    <Menu className="outline-none">
                      {subMenuItem.items?.map((subSubMenuItem) => (
                        <NavigationMenuItem menuItem={subSubMenuItem} />
                      ))}
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
  );
};

const NavigationMenuButton = <T extends object>({
  menuItem,
  children,
  ...props
}: NavigationMenuButtonProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayStore = useOverlayStore();
  return (
    <MenuTrigger
      {...props}
      isOpen={isOpen}
      onOpenChange={(e) => {
        overlayStore.toggleOverlay();
        setIsOpen(e);
      }}
    >
      <Button className={clsx(NavigationMenuButtonStyles)}>
        {menuItem.title}
        <Icon icon="chevron-down" className="ml-2 h-4 w-4 text-neutral-500" />
      </Button>
      <NavigationMenuPanel menuItem={menuItem} />
      {/* <NavigationMenuDropdown menuItem={menuItem}/> */}
    </MenuTrigger>
  );
};

const NavigationMenuBlock = ({ menuItem }: NavigationMenuBlockProps) => {
  return menuItem.items?.length ? (
    <NavigationMenuButton menuItem={menuItem} />
  ) : (
    <NavigationMenuButtonLink menuItem={menuItem} />
  );
};

export const NavigationMenu = ({ menu }: { menu: ShopifyMenu }) => {
  return (
    <div className="flex items-center space-x-2">
      {menu.items?.map((menuItem) => <NavigationMenuBlock menuItem={menuItem} />)}
    </div>
  );
};
