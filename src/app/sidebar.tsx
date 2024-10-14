'use client';

import { clsx } from '@/utils';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const variants: Variants = {
  'in-view': { x: '0px', transition: { type: 'tween', ease: 'easeOut' } },
  'out-of-view': (index: number) => ({
    x: index > 0 ? '250px' : '-250px',
    transition: { type: 'tween', ease: 'easeOut' }
  })
};

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goToNextLevel = (item: any) => {
    if (!item.links) {
      return;
    }
    setSelectedItems([...selectedItems, item.id]);
  };

  const goBack = () => {
    const selectedItemsClone = [...selectedItems];
    selectedItemsClone.pop();
    setSelectedItems([...selectedItemsClone]);
  };

  const getNavItems = (selectedItems: string[]) => {
    let result: any[] = [];
    let links: any[] = [...navigationData];
    let itr = 0;

    if (selectedItems.length === 0) {
      return navigationData;
    }

    // We will run the loop until we reach the correct level
    while (itr < selectedItems.length) {
      let selectedLink: any;

      // Finding the selected item for this level
      for (let i = 0; i < links.length; i++) {
        if (links[i].id === selectedItems[itr]) {
          selectedLink = links[i];

          // We keep a track of the next level links
          if (selectedLink.links) {
            result = [...selectedLink.links];
          }
          break;
        }
      }
      links = [...result];
      itr++;
    }
    return result;
  };

  return (
    <aside
      className={clsx(
        'fixed bottom-0 top-0 w-[250px] overflow-hidden bg-black p-4 transition-all duration-300',
        {
          'left-0': isOpen,
          '-left-[200px]': !isOpen
        }
      )}
    >
      <div className="relative flex flex-col text-white">
        <button className="absolute right-0 top-0 [&>svg]:text-[32px]" onClick={toggleMenu}>
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
        <nav className="relative mt-24">
          <motion.ul
            variants={variants}
            initial="in-view"
            animate={selectedItems.length > 0 ? 'out-of-view' : 'in-view'}
            custom={selectedItems.length > 0 ? -1 : 0}
            className="absolute top-0 w-full duration-200"
          >
            {/* First level items */}
            {navigationData?.map((item: any) => {
              return (
                <li key={item.id} className="px-4 py-2">
                  <button
                    onClick={() => goToNextLevel(item)}
                    className="flex w-full flex-row items-center"
                  >
                    <span className="pr-2">{item.label}</span>
                    {item.links && <FaChevronRight />}
                  </button>
                </li>
              );
            })}
          </motion.ul>

          {/* Subsequent levels */}
          <AnimatePresence>
            {selectedItems.length > 0 &&
              selectedItems.map((id, index) => {
                return (
                  <motion.ul
                    key={id}
                    variants={variants}
                    initial="out-of-view"
                    animate={index + 1 === selectedItems.length ? 'in-view' : 'out-of-view'}
                    exit="out-of-view"
                    custom={index + 1 === selectedItems.length ? 1 : -1}
                    className="absolute top-0 w-full duration-200"
                  >
                    <li className="pb-4">
                      <button className="flex items-center" onClick={goBack}>
                        <FaChevronLeft /> <span className="pl-2">Back</span>
                      </button>
                    </li>
                    {getNavItems(selectedItems.slice(0, index + 1))?.map((item: any) => {
                      return (
                        <li key={item.id} className="px-4 py-2">
                          <button
                            onClick={() => goToNextLevel(item)}
                            className="flex w-full flex-row items-center"
                          >
                            <span className="pr-2">{item.label}</span>
                            {item.links && <FaChevronRight />}
                          </button>
                        </li>
                      );
                    })}
                  </motion.ul>
                );
              })}
          </AnimatePresence>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
