'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { Icon } from '@/components/ui/icon';
import { MenuItem, Menu as ShopifyMenu } from '@/shopify/types';
import { clsx } from '@/utils';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState } from 'react';
import { Button, Link } from 'react-aria-components';

type MenuProps = {
  menu: ShopifyMenu;
};

const MENU_TRANSITION = 5;

export const variants: Variants = {
  'in-view': { x: '0px', opacity: 1, transition: { type: 'tween', duration: MENU_TRANSITION } },
  'out-of-view': (index: number) => ({
    x: index > 0 ? 'var(--menu)' : 'var(--menu-exit)',
    opacity: index > 0 ? 1 : 0,
    transition: { type: 'tween', duration: MENU_TRANSITION }
  })
};

type NavigationMenuItem = {
  item: MenuItem;
};

export const Menu = ({ menu, ...props }: MenuProps) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem>();
  console.log('selectedItem', selectedItem);

  const NavigationMenuItem = ({ item }: NavigationMenuItem) => {
    const navigationMenuItemStyles = clsx(
      'flex w-full items-center justify-between gap-x-2 px-4 py-4 text-sm outline-none pressed:bg-neutral-100'
    );

    return !item.items || item.items?.length === 0 ? (
      <Link className={navigationMenuItemStyles} href={item.url}>
        {item.title}
      </Link>
    ) : (
      <Button className={navigationMenuItemStyles}>
        <span>{item.title}</span>
        <Icon icon="chevron-right" className="text-neutral-500" />
      </Button>
    );
  };

  return (
    <Drawer position="left" size={'lg'} {...props}>
      <ButtonIcon aria-label="Open mobile navigation" icon="menu" variant="ghost" color="neutral" />
      <Drawer.Content>
        <div className="flex h-full w-full min-w-fit flex-col">
          <DialogHeader>Menu</DialogHeader>
          <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <div className="relative flex flex-col">
              <div className="divide-y divide-neutral-100">
                {menu.items?.map((menuItem) => (
                  <div className="space-y-4 p-4" key={menuItem.id}>
                    <Button className={'flex underline'} onPress={() => setSelectedItem(menuItem)}>
                      {menuItem.title}
                    </Button>
                    <AnimatePresence mode="wait">
                      {menuItem.items?.map((menuItemSub) => {
                        return (
                          <motion.div
                            key={menuItemSub.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-red-50"
                          >
                            <Button
                              className={'flex underline'}
                              onPress={() => setSelectedItem(menuItemSub)}
                            >
                              {menuItemSub.title}
                              {menuItemSub.id}
                            </Button>

                            <motion.div
                              key={menuItemSub.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-green-50"
                            >
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
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
