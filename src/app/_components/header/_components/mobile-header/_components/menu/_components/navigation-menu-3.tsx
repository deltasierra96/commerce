'use client';
import { Icon } from '@/components/ui/icon';
import { Menu, MenuItem } from '@/shopify/types';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-aria-components';

export const variants: Variants = {
  'in-view': { x: '0px', transition: { type: 'tween', ease: 'easeOut' } },
  'out-of-view': (index: number) => ({
    x: index > 0 ? '250px' : '-250px',
    transition: { type: 'tween', ease: 'easeOut' }
  })
};

type NavigationMenuProps = {
  menu: Menu;
};

export const Derp = ({ menu, ...props }: NavigationMenuProps) => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);

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

  const getSelectedItemNavItems = (selectedItems: MenuItem[]) => {
    const lastItem = Array.from(selectedItems.values()).pop();
    return lastItem;
  };

  return (
    <div className="relative flex flex-col">
      <nav className="relative">
        <motion.ul
          variants={variants}
          initial="in-view"
          animate={selectedItems.length > 0 ? 'out-of-view' : 'in-view'}
          custom={selectedItems.length > 0 ? -1 : 0}
          className="absolute top-0 w-full duration-200"
        >
          {/* First level items */}
          {menu.items?.map((item) => {
            return (
              <li key={item.id} className="px-4 py-2">
                {item.items && item.items?.length === 0 ? (
                  <Link href={item.url}>{item.title}</Link>
                ) : (
                  <button
                    onClick={() => {
                      goToNextLevel(item);
                    }}
                    className="flex w-full flex-row items-center"
                  >
                    <span className="pr-2">{item.title}</span>
                    <Icon icon="chevron-right" />
                  </button>
                )}
              </li>
            );
          })}
        </motion.ul>

        {/* Subsequent levels */}
        <AnimatePresence>
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
                  className="absolute top-0 w-full duration-200"
                >
                  <li>
                    <span>{selected?.title}</span>
                  </li>
                  <li className="pb-4">
                    <button className="flex items-center" onClick={goBack}>
                      <Icon icon="chevron-left" /> <span className="pl-2">Back</span>
                    </button>
                  </li>
                  {selected?.items?.map((item: MenuItem) => {
                    console.log('item', item);
                    return (
                      <li key={item.id} className="px-4 py-2">
                        {!item.items || item.items?.length === 0 ? (
                          <Link href={item.url}>{item.title}</Link>
                        ) : (
                          <button
                            onClick={() => goToNextLevel(item)}
                            className="flex w-full items-center"
                          >
                            <span className="pr-2">{item.title}</span>
                            {item.items && <Icon icon="chevron-right" />}
                          </button>
                        )}
                      </li>
                    );
                  })}
                </motion.ul>
              );
            })}
        </AnimatePresence>
      </nav>
    </div>
  );
};
