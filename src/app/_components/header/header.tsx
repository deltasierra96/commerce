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
  const [ref, { height }] = useMeasure();

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > height * 2) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }

    if (y < height * 4) {
      setHidden(false);
    }
  });

  return (
    <>
      <MobileHeader menu={menu} />
      <motion.div
        className={clsx('sticky top-0 z-header hidden lg:block')}
        animate={hidden ? 'hidden' : 'visible'}
        initial="visible"
        whileHover={hidden ? 'peeking' : 'visible'}
        onFocusCapture={hidden ? () => setHidden(false) : undefined}
        variants={
          {
            visible: { y: 0 },
            hidden: { y: -height },
            peeking: { y: 0, cursor: 'pointer' }
          } as Variants
        }
        transition={{ duration, ease: easing }}
      >
        <DesktopHeader menu={menu} ref={ref} />
      </motion.div>
    </>
  );
};
