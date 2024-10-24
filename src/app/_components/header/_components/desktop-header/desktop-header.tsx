'use client';
import { Menu as ShopfiyMenu } from '@/shopify/types';

import { Cart } from '@/app/_components/cart';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { forwardRef } from 'react';
import { Account, Navigation } from './_components';

import { clsx } from '@/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { mergeRefs } from 'react-merge-refs';
import useMeasure from 'react-use-measure';
import { Search } from '../search';

type DesktopHeaderProps = {
  menu: ShopfiyMenu;
};

const easing = [0.32, 0.72, 0, 1];
const duration = 0.3;

export const DesktopHeader = forwardRef<HTMLElement, DesktopHeaderProps>(
  ({ menu, ...props }, ref) => {
    const { scrollY } = useScroll();
    const [desktopHeaderRef, { height: desktopHeaderHeight }] = useMeasure();
    const [desktopHeaderPositionSticky, setDesktopHeaderPositionSticky] = useState(false);
    const [desktopHeaderContentTransform, setDesktopHeaderContentTransform] = useState(false);

    useMotionValueEvent(scrollY, 'change', (y) => {
      if (y > desktopHeaderHeight * 5) {
        setDesktopHeaderPositionSticky(true);
      }

      if (y > desktopHeaderHeight * 2) {
        setDesktopHeaderContentTransform(true);
      }

      if (y < desktopHeaderHeight * 4) {
        setDesktopHeaderContentTransform(false);
      }

      if (y < desktopHeaderHeight * 3) {
        setDesktopHeaderPositionSticky(false);
      }
    });

    const mergedRefs = mergeRefs([desktopHeaderRef, ref]);

    return (
      <motion.header
        {...props}
        className={clsx(
          'sticky top-0 z-header-safe hidden w-full border-b border-neutral-100 bg-white opacity-100 lg:flex lg:flex-col'
        )}
        ref={mergedRefs}
        animate={desktopHeaderPositionSticky ? 'sticky' : 'relative'}
        custom={desktopHeaderContentTransform}
        variants={{
          sticky: (transform: boolean) => ({
            y: transform ? 0 : -desktopHeaderHeight,
            opacity: transform ? 1 : 0,
            position: 'sticky'
          }),
          relative: (transform: boolean) => ({
            y: transform ? -desktopHeaderHeight : 0,
            position: 'relative',
            opacity: transform ? 0 : 1
          })
        }}
        transition={{ duration, ease: easing }}
      >
        <Container>
          <div className="flex items-center justify-between gap-x-8 py-5">
            <div className="flex basis-2/12 justify-start">
              <Logo className="h-10" />
            </div>

            <div className="flex basis-8/12 items-center justify-center">
              <div className="mx-auto w-full max-w-screen-md">
                <Navigation menu={menu} />
              </div>
            </div>
            <div className="flex basis-2/12 justify-end">
              <div className="hidden items-center justify-end space-x-2 sm:flex">
                <Account />
                <Search />
                <Cart />
              </div>
            </div>
          </div>
        </Container>
      </motion.header>
    );
  }
);
