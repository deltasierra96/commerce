'use client';
import { Menu } from '@/shopify/types';
import { clsx } from '@/utils';
import { motion, useMotionValueEvent, useScroll, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import useMeasure from 'react-use-measure';
import { DesktopHeader } from './_components/desktop-header';
import { MobileHeader } from './_components/mobile-header';

type HeaderProps = {
  menu: Menu;
};

const easing = [0.32, 0.72, 0, 1];
const duration = 0.35;

export const Header = ({ menu }: HeaderProps) => {
  const { scrollY } = useScroll();
  const [desktopHeaderRef, { height: desktopHeaderHeight }] = useMeasure();
  const [desktopHeaderHidden, setDesktopHeaderHidden] = useState(false);
  const desktopHeaderLastYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - desktopHeaderLastYRef.current;
    if (Math.abs(difference) > desktopHeaderHeight * 2) {
      setDesktopHeaderHidden(difference > 0);
      desktopHeaderLastYRef.current = y;
    }

    if (y < desktopHeaderHeight * 4) {
      setDesktopHeaderHidden(false);
    }
  });

  // Mobile
  const [mobileHeaderHidden, setMobileHeaderHidden] = useState(false);
  const [mobileHeaderRef, { height: mobileHeaderHeight }] = useMeasure();
  const mobileHeaderLastYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - mobileHeaderLastYRef.current;
    if (Math.abs(difference) > mobileHeaderHeight * 2) {
      setMobileHeaderHidden(difference > 0);
      mobileHeaderLastYRef.current = y;
    }

    if (y < mobileHeaderHeight * 4) {
      setMobileHeaderHidden(false);
    }
  });

  return (
    <>
      <motion.div
        className={clsx('sticky top-0 z-header lg:hidden')}
        animate={mobileHeaderHidden ? 'hidden' : 'visible'}
        initial="visible"
        whileHover={mobileHeaderHidden ? 'peeking' : 'visible'}
        onFocusCapture={mobileHeaderHidden ? () => setMobileHeaderHidden(false) : undefined}
        variants={
          {
            visible: { y: 0 },
            hidden: { y: -mobileHeaderHeight },
            peeking: { y: 0 }
          } as Variants
        }
        transition={{ duration, ease: easing }}
      >
        <MobileHeader ref={mobileHeaderRef} menu={menu} />
      </motion.div>

      <motion.div
        className={clsx('sticky top-0 z-header hidden lg:block')}
        animate={desktopHeaderHidden ? 'hidden' : 'visible'}
        initial="visible"
        whileHover={desktopHeaderHidden ? 'peeking' : 'visible'}
        onFocusCapture={desktopHeaderHidden ? () => setDesktopHeaderHidden(false) : undefined}
        variants={
          {
            visible: { y: 0 },
            hidden: { y: -desktopHeaderHeight },
            peeking: { y: 0 }
          } as Variants
        }
        transition={{ duration, ease: easing }}
      >
        <DesktopHeader menu={menu} ref={desktopHeaderRef} />
      </motion.div>
    </>
  );
};
