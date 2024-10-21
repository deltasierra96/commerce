'use client';
import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import {
  Button,
  DialogTrigger,
  Modal,
  ModalOverlay,
  ModalOverlayProps
} from 'react-aria-components';

const _MotionModal = forwardRef<HTMLDivElement, ModalOverlayProps>((props, ref) => (
  <Modal ref={ref} {...props} />
));

const _MotionModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>((props, ref) => (
  <ModalOverlay ref={ref} {...props} />
));

// Create Framer Motion wrappers.
const MotionModal = motion(_MotionModal, { forwardMotionProps: true });
const MotionModalOverlay = motion(_MotionModalOverlay, { forwardMotionProps: true });
type AnimationState = 'unmounted' | 'hidden' | 'visible';

export function Example() {
  // Track animation state.
  let [animation, setAnimation] = React.useState<AnimationState>('unmounted');

  return (
    <DialogTrigger
      // Start animation when open state changes.
      onOpenChange={(isOpen) => setAnimation(isOpen ? 'visible' : 'hidden')}
    >
      <Button>Open dialog</Button>
      <MotionModalOverlay
        isDismissable
        className={'fixed inset-0 isolate z-[99999] flex h-full w-full bg-black/30'}
        // Prevent modal from unmounting during animation.
        isExiting={animation === 'hidden'}
        // Reset animation state once it is complete.
        onAnimationComplete={(animation) => {
          setAnimation((a) => (animation === 'hidden' && a === 'hidden' ? 'unmounted' : a));
        }}
        data-animation={animation}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        initial="hidden"
        animate={animation}
      >
        <MotionModal
          className={'w-96 bg-white p-4'}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          modal content
        </MotionModal>
      </MotionModalOverlay>
    </DialogTrigger>
  );
}
