'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { Icon } from '@/components/ui/icon';
import { MenuItem, Menu as ShopifyMenu } from '@/shopify/types';
import { clsx } from '@/utils';
import { AnimatePresence, motion, MotionConfig, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ListBox, ListBoxItem, ListBoxItemProps, ListBoxProps } from 'react-aria-components';

type MenuProps = {
  menu: ShopifyMenu;
};

export const variants: Variants = {
  'in-view': {
    x: '0px',
    opacity: 1
  },
  'out-of-view': (index: number) => ({
    x: `calc(${index} * var(--menu-width))`,
    opacity: 0
  })
};

type NavigationMenuItem = ListBoxItemProps & {
  item: MenuItem;
  isDisabled?: boolean;
};

type MenuListBoxProps<T> = ListBoxProps<T>;

const MenuListBox = <T extends object>({ children, ...props }: MenuListBoxProps<T>) => (
  <ListBox
    layout="stack"
    orientation="vertical"
    autoFocus
    selectionMode="single"
    className={'w-full divide-y divide-neutral-100 outline-none'}
    {...props}
  >
    {children}
  </ListBox>
);

export const Menu = ({ menu, ...props }: MenuProps) => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [selectedItemTitle, setSelectedItemTitle] = useState<string>();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const router = useRouter();

  const goToNextLevel = (item: MenuItem) => {
    if (item.items?.length === 0) {
      return;
    }
    setSelectedItems([...selectedItems, item]);
  };

  const goBack = () => {
    const selectedItemClone = [...selectedItems];
    selectedItemClone.pop();
    const prevItemTitle = selectedItemClone[selectedItemClone.length - 1]?.title;
    setSelectedItemTitle(prevItemTitle);
    setSelectedItems([...selectedItemClone]);
  };

  const NavigationMenuItem = ({ item, ...props }: NavigationMenuItem) => {
    const isLink = !item.items || item.items?.length === 0;

    return (
      <ListBoxItem
        {...props}
        textValue={item.title}
        className={clsx(
          'flex w-full items-center justify-between gap-x-2 px-4 py-4 text-sm font-medium outline-none focus-visible:bg-neutral-100 focus-visible:underline pressed:bg-neutral-100 disabled:opacity-20'
        )}
        onAction={() => {
          if (isLink) {
            setIsNavOpen(false);
            setSelectedItems([]);
            router.push(item.url);
          } else {
            goToNextLevel(item);
            setSelectedItemTitle(item.title);
          }
        }}
        href={isLink ? item.url : undefined}
      >
        <span>{item.title}</span>
        {!isLink ? <Icon icon="chevron-right" className="text-neutral-500" /> : null}
      </ListBoxItem>
    );
  };

  return (
    <>
      <ButtonIcon
        aria-label="Open mobile navigation"
        onPress={() => setIsNavOpen(true)}
        icon="menu"
        variant="ghost"
        color="neutral"
      />
      <Drawer isOpen={isNavOpen} onOpenChange={(e) => setIsNavOpen(e)} position="left">
        <div className="flex h-full w-full min-w-fit flex-col">
          <DialogHeader>
            {selectedItems.length !== 0 ? (
              <div className="flex items-center gap-x-2">
                <ButtonIcon compact icon="arrow-left" variant={'ghost'} onPress={goBack} />
                <span>{selectedItemTitle ? selectedItemTitle : 'Menu'}</span>
              </div>
            ) : (
              'Menu'
            )}
          </DialogHeader>
          <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <div className="flex h-full flex-col">
              <nav className="relative min-h-0 flex-1 overflow-x-hidden bg-white [--menu-width:--drawer-lg]">
                <MotionConfig transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}>
                  <motion.div
                    variants={variants}
                    initial="in-view"
                    animate={selectedItems.length > 0 ? 'out-of-view' : 'in-view'}
                    custom={selectedItems.length > 0 ? -1 : 0}
                    className="w-full divide-y divide-neutral-100"
                  >
                    <MenuListBox items={menu.items}>
                      {(item) => <NavigationMenuItem id={item.id} item={item} />}
                    </MenuListBox>
                  </motion.div>

                  <AnimatePresence>
                    {selectedItems.map((menuItem, index) => {
                      return (
                        <motion.div
                          className="absolute top-0 w-full"
                          key={menuItem.id}
                          variants={variants}
                          initial="out-of-view"
                          animate={index + 1 === selectedItems.length ? 'in-view' : 'out-of-view'}
                          exit="out-of-view"
                          custom={index + 1 === selectedItems.length ? 1 : -1}
                        >
                          <MenuListBox items={menuItem?.items}>
                            {(item) => <NavigationMenuItem id={item.id} item={item} />}
                          </MenuListBox>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </MotionConfig>
              </nav>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
