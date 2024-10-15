'use client';
import { Icon } from '@/components/ui/icon';
import { Menu, MenuItem } from '@/shopify/types';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState } from 'react';

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

const navigationData = {
  id: 'gid://shopify/Menu/258535162194',
  title: 'Main menu',
  items: [
    {
      id: 'gid://shopify/MenuItem/611663872338',
      title: 'Home',
      url: '/',
      items: []
    },
    {
      id: 'gid://shopify/MenuItem/611663905106',
      title: 'Exterior',
      url: '/collections/exterior',
      items: [
        {
          id: 'gid://shopify/MenuItem/654806483282',
          title: 'Washing & Drying',
          url: '/collections/washing-drying',
          items: [
            {
              id: 'gid://shopify/MenuItem/655017705810',
              title: 'Air Dryers',
              url: '/collections/air-dryers'
            },
            {
              id: 'gid://shopify/MenuItem/655016886610',
              title: 'Buckets & Grit Guards',
              url: '/collections/buckets-grit-guards'
            },
            {
              id: 'gid://shopify/MenuItem/655073509714',
              title: 'Chamois',
              url: '/collections/chamois'
            },
            {
              id: 'gid://shopify/MenuItem/655017673042',
              title: 'Drying Aids',
              url: '/collections/drying-aids'
            },
            {
              id: 'gid://shopify/MenuItem/655017279826',
              title: 'Drying Towels',
              url: '/collections/drying-towels'
            },
            {
              id: 'gid://shopify/MenuItem/654871232850',
              title: 'Pre-Washes',
              url: '/collections/pre-washes'
            },
            {
              id: 'gid://shopify/MenuItem/655016296786',
              title: 'Shampoos',
              url: '/collections/shampoos'
            },
            {
              id: 'gid://shopify/MenuItem/654806548818',
              title: 'Snow Foam & Lances',
              url: '/collections/snow-foam-lances'
            },
            {
              id: 'gid://shopify/MenuItem/655017083218',
              title: 'Trigger Guns & Accessories',
              url: '/collections/trigger-guns-accessories'
            },
            {
              id: 'gid://shopify/MenuItem/655016329554',
              title: 'Wash Mitts & Sponges',
              url: '/collections/wash-mitts-sponges'
            }
          ]
        },
        {
          id: 'gid://shopify/MenuItem/654806516050',
          title: 'Wheel & Tyre',
          url: '/collections/wheel-tyre',
          items: [
            {
              id: 'gid://shopify/MenuItem/655018295634',
              title: 'Wheel Cleaners',
              url: '/collections/wheel-cleaners'
            },
            {
              id: 'gid://shopify/MenuItem/655018328402',
              title: 'Iron Fallout Removers',
              url: '/collections/iron-fallout-removers'
            },
            {
              id: 'gid://shopify/MenuItem/655018688850',
              title: 'Wheel Brushes',
              url: '/collections/wheel-brushes'
            },
            {
              id: 'gid://shopify/MenuItem/655019082066',
              title: 'Wheel Waxes & Sealants',
              url: '/collections/wheel-waxes-sealants'
            },
            {
              id: 'gid://shopify/MenuItem/655019114834',
              title: 'Tyre Dressings & Applicators',
              url: '/collections/tyre-dressings-applicators'
            },
            {
              id: 'gid://shopify/MenuItem/655019147602',
              title: 'Tyre Cleaners',
              url: '/collections/tyre-cleaners'
            }
          ]
        },
        {
          id: 'gid://shopify/MenuItem/655015608658',
          title: 'Paint Decontamination',
          url: '/collections/paint-decontamination',
          items: [
            {
              id: 'gid://shopify/MenuItem/655019245906',
              title: 'Iron Fallout Removers',
              url: '/collections/iron-fallout-removers'
            },
            {
              id: 'gid://shopify/MenuItem/655019278674',
              title: 'Clay Bars, Towels & Lube',
              url: '/collections/clay-bars-towels-lube'
            },
            {
              id: 'gid://shopify/MenuItem/655019671890',
              title: 'Tar & Glue Removers',
              url: '/collections/tar-glue-removers'
            },
            {
              id: 'gid://shopify/MenuItem/655020032338',
              title: 'Bug & Grime Removers',
              url: '/collections/bug-grime-removers'
            },
            {
              id: 'gid://shopify/MenuItem/655020589394',
              title: 'Water Spot Removers',
              url: '/collections/water-spot-removers'
            },
            {
              id: 'gid://shopify/MenuItem/655020622162',
              title: 'All Purpose Cleaners (APC)',
              url: '/collections/all-purpose-cleaners-apc'
            }
          ]
        },
        {
          id: 'gid://shopify/MenuItem/655027437906',
          title: 'Paint Preparation',
          url: '/collections/paint-preparation',
          items: [
            {
              id: 'gid://shopify/MenuItem/655029403986',
              title: 'Glazes',
              url: '/collections/glazes'
            },
            {
              id: 'gid://shopify/MenuItem/655029436754',
              title: 'Pre-wax Cleansers',
              url: '/collections/pre-wax-cleansers'
            }
          ]
        },
        {
          id: 'gid://shopify/MenuItem/655079211346',
          title: 'Paint Protection',
          url: '/collections/paint-protection',
          items: []
        },
        {
          id: 'gid://shopify/MenuItem/655018099026',
          title: 'Headlight Restoration',
          url: '/collections/headlight-restoration',
          items: []
        }
      ]
    },
    {
      id: 'gid://shopify/MenuItem/654005862738',
      title: 'Interior',
      url: '/collections/interior',
      items: [
        {
          id: 'gid://shopify/MenuItem/655020654930',
          title: 'Dash & Trim Cleaners',
          url: '/collections/dash-trim',
          items: []
        },
        {
          id: 'gid://shopify/MenuItem/655063482706',
          title: 'Glass Care',
          url: '/collections/glass-care',
          items: [
            {
              id: 'gid://shopify/MenuItem/655063515474',
              title: 'Anti-fog Coatings',
              url: '/collections/anti-fog-coatings'
            },
            {
              id: 'gid://shopify/MenuItem/655063548242',
              title: 'Glass Cleaners',
              url: '/collections/glass-cleaners'
            },
            {
              id: 'gid://shopify/MenuItem/655063581010',
              title: 'Glass Cloths & Accessories',
              url: '/collections/glass-cloths'
            },
            {
              id: 'gid://shopify/MenuItem/655063613778',
              title: 'Glass Polishes',
              url: '/collections/glass-polishes'
            }
          ]
        },
        {
          id: 'gid://shopify/MenuItem/655064695122',
          title: 'Upholstery',
          url: '/collections/upholstery',
          items: [
            {
              id: 'gid://shopify/MenuItem/655065416018',
              title: 'Alcantara Cleaners',
              url: '/collections/alcantara-cleaners'
            },
            {
              id: 'gid://shopify/MenuItem/655064727890',
              title: 'Carpet & Fabric Cleaners',
              url: '/collections/carpets-fabric-cleaners'
            },
            {
              id: 'gid://shopify/MenuItem/655065448786',
              title: 'Carpet & Fabric Sealants',
              url: '/collections/carpets-fabric-sealants'
            },
            {
              id: 'gid://shopify/MenuItem/655065481554',
              title: 'Carpet & Fabric Brushes',
              url: '/collections/carpet-fabric-brushes'
            }
          ]
        },
        {
          id: 'gid://shopify/MenuItem/655066005842',
          title: 'Leather Care',
          url: '/collections/leather-care',
          items: [
            {
              id: 'gid://shopify/MenuItem/655066988882',
              title: 'Leather Brushes',
              url: '/collections/leather-brushes'
            },
            {
              id: 'gid://shopify/MenuItem/655066956114',
              title: 'Leather Care Kits',
              url: '/collections/leather-care-kits'
            },
            {
              id: 'gid://shopify/MenuItem/655066038610',
              title: 'Leather Cleaners',
              url: '/collections/leather-cleaners'
            },
            {
              id: 'gid://shopify/MenuItem/655066399058',
              title: 'Leather Conditioners',
              url: '/collections/leather-conditioners'
            },
            {
              id: 'gid://shopify/MenuItem/655066431826',
              title: 'Leather Sealants',
              url: '/collections/leather-sealants'
            }
          ]
        },
        {
          id: 'gid://shopify/MenuItem/655067775314',
          title: 'Air Fresheners',
          url: '/collections/air-fresheners',
          items: [
            {
              id: 'gid://shopify/MenuItem/655068692818',
              title: 'Air Con Sanitizers',
              url: '/collections/air-con-sanitizers'
            },
            {
              id: 'gid://shopify/MenuItem/655068135762',
              title: 'Hangable Air Fresheners',
              url: '/collections/hangable-air-fresheners'
            },
            {
              id: 'gid://shopify/MenuItem/655068168530',
              title: 'Sprayable Air Fresheners',
              url: '/collections/sprayable-air-fresheners'
            }
          ]
        },
        {
          id: 'gid://shopify/MenuItem/655070101842',
          title: 'Tools & Accessories',
          url: '/collections/interior-tools-accessories',
          items: [
            {
              id: 'gid://shopify/MenuItem/655070134610',
              title: 'Detailing Swabs',
              url: '/collections/detailing-swabs'
            },
            {
              id: 'gid://shopify/MenuItem/655070167378',
              title: 'Drill Brushes',
              url: '/collections/drill-brushes'
            },
            {
              id: 'gid://shopify/MenuItem/655070200146',
              title: 'Interior Brushes',
              url: '/collections/interior-brushes-tools'
            }
          ]
        }
      ]
    },
    {
      id: 'gid://shopify/MenuItem/654005895506',
      title: 'Paint Care',
      url: '/collections/paint-care',
      items: []
    },
    {
      id: 'gid://shopify/MenuItem/654005928274',
      title: 'Accessories',
      url: '/collections/accessories',
      items: []
    },
    {
      id: 'gid://shopify/MenuItem/655028715858',
      title: 'License Plates',
      url: '/collections/license-plates',
      items: []
    },
    {
      id: 'gid://shopify/MenuItem/654005961042',
      title: 'Tools',
      url: '/collections/tools',
      items: []
    },
    {
      id: 'gid://shopify/MenuItem/611663937874',
      title: 'Contact',
      url: '/pages/contact',
      items: []
    }
  ]
};

export const Derp = ({ ...props }: NavigationMenuProps) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  console.log('selectedItems not working', selectedItems);

  const goToNextLevel = (item: MenuItem) => {
    console.log('item', item);
    if (item.items?.length === 0) {
      return;
    }
    setSelectedItems([...selectedItems, item.id]);
  };

  const goBack = () => {
    const selectedItemClone = [...selectedItems];
    selectedItemClone.pop();
    setSelectedItems([...selectedItemClone]);
  };

  const getNavItems = (selectedItems: string[]) => {
    let result: any[] = [];
    let links: any[] = [...navigationData.items];
    console.log('links', links);
    let itr = 0;

    if (selectedItems.length === 0) {
      return navigationData.items;
    }

    // We will run the loop until we reach the correct level
    while (itr < selectedItems.length) {
      let selectedLink: any;
      console.log('selectedLink', selectedLink);

      // Finding the selected item for this level
      for (let i = 0; i < links.length; i++) {
        console.log('derp');
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
    console.log('result', result);
    return result;
  };

  return (
    <div className="relative flex flex-col">
      <nav className="relative">
        <motion.ul
          variants={variants}
          initial="in-view"
          animate={selectedItems.length > 0 ? 'out-of-view' : 'in-view'}
          custom={selectedItems.length > 0 ? -1 : 0}
          className="top-0 w-full duration-200"
        >
          {/* First level items */}
          {navigationData.items?.map((item) => {
            return (
              <li key={item.id} className="px-4 py-2">
                <button
                  onClick={() => {
                    console.log('clicked item', item);
                    if (item.items.length) {
                      goToNextLevel(item);
                    }
                  }}
                  className="flex w-full flex-row items-center"
                >
                  <span className="pr-2">{item.title}</span>
                  {item.items.length !== 0 && <Icon icon="chevron-right" />}
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
                  className="top-0 w-full duration-200"
                >
                  <li className="pb-4">
                    <button className="flex items-center" onClick={goBack}>
                      <Icon icon="chevron-left" /> <span className="pl-2">Back</span>
                    </button>
                  </li>
                  {getNavItems(selectedItems.slice(0, index + 1))?.map((item: any) => {
                    console.log('item', item);
                    return (
                      <li key={item.id} className="px-4 py-2">
                        <button onClick={() => goToNextLevel(item)} className="w-full">
                          <span className="pr-2">{item.title}</span>
                          {item.items && <Icon icon="chevron-right" />}
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
  );
};
