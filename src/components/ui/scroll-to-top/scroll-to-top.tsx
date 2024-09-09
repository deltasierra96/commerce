'use client';
import React, { useEffect } from 'react';
import { ButtonIcon } from '../button-icon';
import { AnimatePresence, cubicBezier, motion, useScroll } from 'framer-motion';
import { Tooltip } from '../tooltip';

const goToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const ScrollToTop = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(true);
  // const [mounted, setMounted] = useState(false);

  function update() {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(true);
    } else if (scrollY.get() > 100 && scrollY.get() > scrollY.getPrevious()) {
      setHidden(false);
    }
  }

  useEffect(() => {
    return scrollY.on('change', () => update());
  });

  const MotionButton = motion(ButtonIcon);

  return (
    <AnimatePresence>
      {!hidden ? (
        <Tooltip>
          <MotionButton
            icon='arrow-long-up'
            layout='position'
            className='fixed bottom-4 right-4 z-[999] opacity-0'
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
              hidden: {
                opacity: 0,
                y: -20,
              },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{
              ease: cubicBezier(0.6, 0.4, 0, 1),
              duration: 0.3,
            }}
            onPress={goToTop}
            variant='filled'
            color='primary'
          >
            Scroll to top
          </MotionButton>
          <Tooltip.Content>Scroll to top</Tooltip.Content>
        </Tooltip>
      ) : null}
    </AnimatePresence>
  );
};
