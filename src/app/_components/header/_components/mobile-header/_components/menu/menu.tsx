'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { Icon } from '@/components/ui/icon';
import { MenuItem, Menu as ShopifyMenu } from '@/shopify/types';
import { clsx } from '@/utils';
import { AnimatePresence, motion, Variants } from 'framer-motion';
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
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [selectedItemTitle, setSelectedItemTitle] = useState<string>();

  const goToNextLevel = (item: MenuItem) => {
    if (item.items?.length === 0) {
      return;
    }
    setSelectedItems([...selectedItems, item]);
  };

  const goBack = () => {
    const selectedItemClone = [...selectedItems];
    selectedItemClone.pop();
    setSelectedItems([...selectedItemClone]);
  };

  const getSelectedItemNavItems = (selectedItems: MenuItem[]) =>
    Array.from(selectedItems.values()).pop();

  const NavigationMenuItem = ({ item }: NavigationMenuItem) => {
    const navigationMenuItemStyles = clsx(
      'flex w-full items-center justify-between gap-x-2 px-4 py-4 text-sm outline-none pressed:bg-neutral-100'
    );

    return !item.items || item.items?.length === 0 ? (
      <Link className={navigationMenuItemStyles} href={item.url}>
        {item.title}
      </Link>
    ) : (
      <Button
        onPress={() => {
          goToNextLevel(item);
          setSelectedItemTitle(item.title);
        }}
        className={navigationMenuItemStyles}
      >
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
          <DialogHeader>
            <div className="flex items-center">
              <ButtonIcon size="sm" icon="arrow-left" onPress={goBack} />
              <span>{selectedItemTitle ? selectedItemTitle : 'Menu'}</span>
            </div>
          </DialogHeader>
          <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <div className="relative flex flex-col">
              <nav className="relative [--menu-exit:calc(var(--menu)*-1)] [--menu:--drawer-lg]">
                <motion.ul
                  variants={variants}
                  initial="in-view"
                  animate={selectedItems.length > 0 ? 'out-of-view' : 'in-view'}
                  custom={selectedItems.length > 0 ? -1 : 0}
                  className="absolute top-0 w-full divide-y divide-neutral-100"
                >
                  {/* First level items */}
                  {menu.items?.map((item) => {
                    return <NavigationMenuItem key={item.id} item={item} />;
                  })}
                </motion.ul>

                {/* Subsequent levels */}
                <AnimatePresence mode="popLayout">
                  {selectedItems.length > 0 &&
                    selectedItems.map((menuItem, index) => {
                      const selected = getSelectedItemNavItems(selectedItems.slice(0, index + 1));
                      return (
                        <motion.ul
                          key={menuItem.id}
                          variants={variants}
                          initial="out-of-view"
                          animate={index + 1 === selectedItems.length ? 'in-view' : 'out-of-view'}
                          exit="out-of-view"
                          custom={index + 1 === selectedItems.length ? 1 : -1}
                          className="absolute top-0 w-full divide-y divide-neutral-100"
                        >
                          {selected?.items?.map((item: MenuItem) => {
                            return (
                              <li key={item.id}>
                                <NavigationMenuItem key={item.id} item={item} />
                              </li>
                            );
                          })}
                        </motion.ul>
                      );
                    })}
                </AnimatePresence>
              </nav>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
