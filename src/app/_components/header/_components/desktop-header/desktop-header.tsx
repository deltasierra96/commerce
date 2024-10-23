'use client';
import { Cart } from '@/app/_components/cart';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Menu as ShopfiyMenu } from '@/shopify/types';
import { clsx } from '@/utils';
import {
  clamp,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'framer-motion';
import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { Menu, Search } from '../mobile-header/_components';
import { Account, Navigation } from './_components';
type DesktopHeaderProps = {
  menu: ShopfiyMenu;
};

const MotionHeader = motion('header');
const easing = [0.32, 0.72, 0, 1];
const duration = 0.35;

function useBoundedScroll(threshold: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(scrollYBounded, [0, threshold], [0, 1]);

  useEffect(() => {
    return scrollY.on('change', (current) => {
      const previous = scrollY.getPrevious();
      const diff = previous ? current - previous : 0;
      const newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export const DesktopHeader = ({ menu, ...props }: DesktopHeaderProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { scrollY } = useScroll();
  const [ref, { height }] = useMeasure();

  const stickyTrigger = height * 4;
  const contentTrigger = stickyTrigger / 2;

  useMotionValueEvent(scrollY, 'change', (y) => {
    if (y > stickyTrigger) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
      setIsContentVisible(true);
    }

    if (y > contentTrigger) {
      setIsContentVisible(true);
    }

    if (y > contentTrigger && y < stickyTrigger) {
      setIsContentVisible(false);
    }
  });

  return (
    <motion.header
      className={clsx('relative top-0 z-header hidden lg:block')}
      ref={ref}
      // whileHover="open"
      // onFocusCapture={() => setIsSticky(false)}
      animate={isSticky ? 'sticky' : 'nonSticky'}
      variants={{
        sticky: {
          position: 'sticky'
        },
        nonSticky: {
          position: 'relative'
        }
      }}
      transition={{ duration: duration, ease: easing }}
    >
      <motion.div
        className="w-full border-b border-neutral-200 bg-white lg:flex lg:flex-col"
        animate={isContentVisible ? 'visible' : 'hidden'}
        variants={{
          visible: {
            y: 0
          },
          hidden: {
            y: -height
          }
        }}
        transition={{ duration: duration, ease: easing }}
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
      </motion.div>
    </motion.header>
  );
};
