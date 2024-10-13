'use client';

import { clsx } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useOverlayStore } from './store';

export const Overlay = ({ enableBlur = true }: { enableBlur?: boolean }) => {
  const { isOpen } = useOverlayStore((state) => state);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={clsx(
            'fixed inset-0 isolate z-[30] flex w-full bg-black/30 transition-all',
            enableBlur && 'backdrop-blur-sm'
          )}
          aria-hidden
        />
      )}
    </AnimatePresence>
  );
};
