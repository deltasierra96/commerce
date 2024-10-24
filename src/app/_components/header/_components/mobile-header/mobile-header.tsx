'use client';
import { Cart } from '@/app/_components/cart';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Menu as ShopifyMenu } from '@/shopify/types';
import { forwardRef } from 'react';
import { Account, Menu, Search } from './_components';

import { clsx } from '@/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { mergeRefs } from 'react-merge-refs';
import useMeasure from 'react-use-measure';

type MobileHeaderProps = {
  menu: ShopifyMenu;
};

const easing = [0.32, 0.72, 0, 1];
const duration = 0.35;

export const MobileHeader = forwardRef<HTMLElement, MobileHeaderProps>(
  ({ menu, ...props }, ref) => {
    const { scrollY } = useScroll();
    const [mobileHeaderRef, { height: mobileHeaderHeight }] = useMeasure();
    const [mobileHeaderPositionSticky, setMobileHeaderPositionSticky] = useState(false);
    const [mobileHeaderContentTransform, setMobileHeaderContentTransform] = useState(false);

    useMotionValueEvent(scrollY, 'change', (y) => {
      if (y > mobileHeaderHeight * 5) {
        setMobileHeaderPositionSticky(true);
      }

      if (y > mobileHeaderHeight * 2) {
        setMobileHeaderContentTransform(true);
      }

      if (y < mobileHeaderHeight * 4) {
        setMobileHeaderContentTransform(false);
      }

      if (y < mobileHeaderHeight * 3) {
        setMobileHeaderPositionSticky(false);
      }
    });
    const mergedRefs = mergeRefs([mobileHeaderRef, ref]);

    return (
      <motion.header
        {...props}
        ref={mergedRefs}
        className={clsx(
          'sticky top-0 z-header flex w-full items-center border-b border-neutral-200 bg-white py-2 opacity-100 lg:hidden'
        )}
        animate={mobileHeaderPositionSticky ? 'sticky' : 'relative'}
        initial="sticky"
        custom={mobileHeaderContentTransform}
        variants={{
          sticky: (transform: boolean) => ({
            y: transform ? 0 : -mobileHeaderHeight,
            position: 'sticky'
          }),
          relative: (transform: boolean) => ({
            y: transform ? -mobileHeaderHeight : 0,
            position: 'relative'
          })
        }}
        transition={{ duration, ease: easing }}
      >
        <Container>
          <div className="flex items-center justify-between gap-x-8">
            <div className="flex basis-2/12 justify-start">
              <Menu menu={menu} />
              <Search />
            </div>
            <div className="flex basis-2/12 items-center justify-center">
              <Logo className="h-8 sm:h-10" />
            </div>

            <div className="flex basis-2/12 justify-end">
              <Account />
              <Cart />
            </div>
          </div>
        </Container>
      </motion.header>
    );
  }
);
