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
import { Button, Link } from 'react-aria-components';

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

type NavigationMenuItem = {
  item: MenuItem;
};

export const Menu = ({ menu, ...props }: MenuProps) => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [selectedItemTitle, setSelectedItemTitle] = useState<string>();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const router = useRouter();
  // const pathname = usePathname();

  // useEffect(() => {
  //   setIsNavOpen(false);
  //   setSelectedItems([]);
  // }, [pathname]);

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
    const navigationMenuItemStyles = clsx(
      'flex w-full items-center justify-between gap-x-2 px-4 py-4 text-sm font-medium outline-none focus:bg-neutral-100 focus:underline pressed:bg-neutral-100'
    );

    return !item.items || item.items?.length === 0 ? (
      <Link
        className={navigationMenuItemStyles}
        onPress={() => {
          setIsNavOpen(false);
          setSelectedItems([]);
          router.push(item.url);
        }}
        href={item.url}
        {...props}
      >
        {item.title}
      </Link>
    ) : (
      <Button
        {...props}
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
    <Drawer
      isOpen={isNavOpen}
      onOpenChange={(e) => setIsNavOpen(e)}
      position="left"
      size={'lg'}
      {...props}
    >
      <ButtonIcon
        aria-label="Open mobile navigation"
        onPress={() => setIsNavOpen(true)}
        icon="menu"
        variant="ghost"
        color="neutral"
      />
      <Drawer.Content>
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
                  <motion.ul
                    variants={variants}
                    initial="in-view"
                    animate={selectedItems.length > 0 ? 'out-of-view' : 'in-view'}
                    custom={selectedItems.length > 0 ? -1 : 0}
                    className="w-full divide-y divide-neutral-100"
                  >
                    {/* First level items */}
                    {menu.items?.map((item) => {
                      return <NavigationMenuItem key={item.id} item={item} />;
                    })}
                  </motion.ul>

                  <AnimatePresence>
                    {/* Subsequent levels */}
                    {selectedItems.length > 0 &&
                      selectedItems.map((menuItem, index) => {
                        return (
                          <motion.ul
                            className="absolute top-0 w-full divide-y divide-neutral-100"
                            key={menuItem.id}
                            variants={variants}
                            initial="out-of-view"
                            animate={index + 1 === selectedItems.length ? 'in-view' : 'out-of-view'}
                            exit="out-of-view"
                            custom={index + 1 === selectedItems.length ? 1 : -1}
                          >
                            {menuItem?.items?.map((item: MenuItem) => {
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
                </MotionConfig>
              </nav>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
