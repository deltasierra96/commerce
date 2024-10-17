'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { MenuItem } from '@/shopify/types';
import { Variants } from 'framer-motion';
import Sidebar from './_components/navigation-menu-3';

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

export const Menu2 = () => {
  return (
    <Drawer position="left" size={'lg'}>
      <ButtonIcon aria-label="Open mobile navigation" icon="menu" variant="ghost" color="neutral" />
      <Drawer.Content>
        <div className="flex h-full w-full min-w-fit flex-col">
          <DialogHeader>Menu Tut</DialogHeader>
          <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Sidebar />
          </div>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
