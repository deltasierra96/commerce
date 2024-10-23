'use client';
import { Cart } from '@/app/_components/cart';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Menu as ShopfiyMenu } from '@/shopify/types';
import { clsx } from '@/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import useMeasure from 'react-use-measure';
import { Menu, Search } from '../mobile-header/_components';
import { Account, Navigation } from './_components';
type DesktopHeaderProps = {
  menu: ShopfiyMenu;
};

const MotionHeader = motion('header');

export const DesktopHeader = ({ menu, ...props }: DesktopHeaderProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const [ref, { height }] = useMeasure();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > height) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <MotionHeader
      className={clsx(
        'sticky top-0 z-[31] hidden w-full border-b border-neutral-200 bg-white lg:flex lg:flex-col'
      )}
      ref={ref}
      animate={isHidden ? 'hidden' : 'visible'}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: '-100%'
        },
        visible: {
          y: '0%'
        }
      }}
      transition={{ duration: 0.2 }}
    >
      <Container>
        <div className="flex items-center justify-between gap-x-8 py-5">
          <div className="flex basis-2/12 justify-start">
            <Logo className="h-10" />
            <Menu menu={menu} />
          </div>

          <div className="flex basis-8/12 items-center justify-center">
            <div className="mx-auto w-full max-w-screen-md">{/* <Search /> */}</div>
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

      <div className="border-t border-neutral-100 py-1.5">
        <Container>
          <Navigation menu={menu} />
        </Container>
      </div>
    </MotionHeader>
  );
};
