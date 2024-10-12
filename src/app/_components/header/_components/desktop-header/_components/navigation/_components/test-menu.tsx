'use client';
import { Popover } from '@/components/ui/popover';
import { Menu as ShopifyMenu } from '@/shopify/types';
import { clsx } from '@/utils';
import { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  MenuTrigger,
  MenuTriggerProps
} from 'react-aria-components';

interface MyMenuButtonProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  label?: string;
}

function MyMenuButton<T extends object>({ label, children, ...props }: MyMenuButtonProps<T>) {
  return (
    <MenuTrigger {...props}>
      <Button
        className={clsx(
          'flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
        )}
      >
        {label}
      </Button>
      <Popover>
        <div className="p-2">
          <Menu className="outline-none" {...props}>
            {children}
          </Menu>
        </div>
      </Popover>
    </MenuTrigger>
  );
}

function MyItem(props: MenuItemProps) {
  let textValue =
    props.textValue || (typeof props.children === 'string' ? props.children : undefined);
  return (
    <MenuItem
      {...props}
      textValue={textValue}
      className={({ isFocused, isSelected, isOpen }) =>
        `my-item ${isFocused ? 'focused' : ''} ${isOpen ? 'open' : ''}`
      }
    >
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && (
            <svg className="chevron" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </>
      )}
    </MenuItem>
  );
}

export const TestMenu = ({ menu }: { menu: ShopifyMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center space-x-2">
      {menu.items?.map((menuItem) => (
        <MenuTrigger>
          <Button
            className={clsx(
              'flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
            )}
          >
            {menuItem.title}
          </Button>
          <Popover>
            <div className="p-2">
              <Menu className="outline-none">
                {menuItem.items?.map((subMenuItem) => (
                  <MenuItem
                    href={subMenuItem.url}
                    className={clsx(
                      'flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
                    )}
                    textValue={subMenuItem.title}
                  >
                    {subMenuItem.title}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Popover>
        </MenuTrigger>
      ))}
      {/* <MyMenuButton isOpen={isOpen} onOpenChange={setIsOpen} label="Actions">
        <MyItem>Cut</MyItem>
        <MyItem>Copy</MyItem>
        <MyItem>Delete</MyItem>
        <SubmenuTrigger>
          <MyItem>Share</MyItem>
          <Popover className={'w-full bg-white p-4'}>
            <Menu>
              <MyItem>SMS</MyItem>
              <MyItem>Twitter</MyItem>
              <SubmenuTrigger>
                <MyItem>Email</MyItem>
                <Popover>
                  <Menu>
                    <MyItem>Work</MyItem>
                    <MyItem>Personal</MyItem>
                  </Menu>
                </Popover>
              </SubmenuTrigger>
            </Menu>
          </Popover>
        </SubmenuTrigger>
      </MyMenuButton> */}
    </div>
  );
};
