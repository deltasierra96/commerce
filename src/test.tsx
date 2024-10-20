import { AnimatePresence, motion, Variants } from 'framer-motion';
import { forwardRef, useState } from 'react';
import {
  Button,
  Dialog,
  Heading,
  Modal,
  ModalOverlay,
  ModalOverlayProps
} from 'react-aria-components';
import { clsx } from './utils';

type DrawerPositionProps = 'left' | 'right';
type DrawerSizeProps = 'lg' | 'xl';

const duration = 0.3;
const position: DrawerPositionProps = 'right';
const size: DrawerSizeProps = 'lg';

const motionOverlay: Variants = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0,
    transition: { delay: 0.5, duration: duration, ease: [0.32, 0.72, 0, 1] }
  }
};

const motionModal: Variants = {
  open: (position: DrawerPositionProps) => ({
    visibility: 'visible',
    opacity: 1,
    x: 0,
    transition: { delay: 0.125, duration: duration, ease: [0.32, 0.72, 0, 1] }
  }),
  closed: (position: DrawerPositionProps) => ({
    visibility: 'hidden',
    opacity: 0,
    x: position === 'right' ? 'var(--menu-width)' : 'calc(var(--menu-width) * -1)',
    transition: { delay: 0.25, duration: duration, ease: [0.72, 0.32, 0, 1] }
  })
};

const motionDialogContent: Variants = {
  open: {
    opacity: 1,
    transition: { delay: 0.25, duration: duration, ease: [0.32, 0.72, 0, 1] }
  },
  closed: {
    opacity: 0,
    transition: { duration: duration, ease: [0.32, 0.72, 0, 1] }
  }
};

type _ModalProps = ModalOverlayProps;

const _Modal = forwardRef<HTMLDivElement, _ModalProps>((props, ref) => (
  <Modal ref={ref} {...props} />
));

type _ModalOverlayProps = ModalOverlayProps;

const _ModalOverlay = forwardRef<HTMLDivElement, _ModalOverlayProps>((props, ref) => (
  <ModalOverlay ref={ref} {...props} />
));

// Wrap React Aria modal components so they support framer-motion values.
const MotionModal = motion(_Modal);
const MotionModalOverlay = motion(_ModalOverlay);

export function Sheet() {
  let [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded border-none bg-transparent text-lg font-semibold text-blue-600 outline-none focus-visible:ring pressed:text-blue-700"
        onPress={() => setOpen(true)}
      >
        Open sheet
      </Button>
      <AnimatePresence>
        {isOpen && (
          <MotionModalOverlay
            // Force the modal to be open when AnimatePresence renders it.
            isOpen
            onOpenChange={setOpen}
            variants={motionOverlay}
            initial={'closed'}
            animate={'open'}
            exit={'closed'}
            isDismissable={true}
            className={clsx('fixed inset-0 z-10 bg-black/30')}
          >
            <MotionModal
              variants={motionModal}
              initial={'closed'}
              animate={'open'}
              exit={'closed'}
              custom={position}
              isDismissable={true}
              className={clsx(
                'absolute inset-y-0 h-full p-4',
                size === 'lg' && 'w-drawer-lg [--menu-width:--drawer-lg]',
                size === 'xl' && 'w-drawer-xl [--menu-width:--drawer-xl]',
                position === 'left' && 'left-0',
                position === 'right' && 'right-0'
              )}
            >
              {/* drag affordance */}
              <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-gray-400" />
              <Dialog className="px-4 pb-4 outline-none">
                <div className="flex justify-end">
                  <Button
                    className="mb-8 rounded border-none bg-transparent text-lg font-semibold text-blue-600 outline-none focus-visible:ring pressed:text-blue-700"
                    onPress={() => setOpen(false)}
                  >
                    Done
                  </Button>
                </div>
                <Heading slot="title" className="mb-4 text-3xl font-semibold">
                  Modal sheet
                </Heading>
                <p className="mb-4 text-lg">
                  This is a dialog with a custom modal overlay built with React Aria Components and
                  Framer Motion.
                </p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nisl
                  blandit, pellentesque eros eu, scelerisque eros. Sed cursus urna at nunc lacinia
                  dapibus.
                </p>
              </Dialog>
            </MotionModal>
          </MotionModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
}
