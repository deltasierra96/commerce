import { clsx } from '@/utils';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { CSSProperties, forwardRef } from 'react';
import {
  Dialog,
  DialogProps,
  DialogTrigger,
  DialogTriggerProps,
  Modal,
  ModalOverlay,
  type ModalOverlayProps
} from 'react-aria-components';
import { DialogHeader, DialogHeaderProps } from '../dialog';

const duration = 0.5;
const easing = [0.32, 0.72, 0, 1];

const motionOverlay: Variants = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0,
    transition: { delay: 0.35, duration: duration, ease: easing }
  }
};

const motionModal: Variants = {
  open: (position: DrawerPositionProps) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.125, duration: duration, ease: easing }
  }),
  closed: (position: DrawerPositionProps) => ({
    opacity: 0,
    x: position === 'right' ? 'var(--menu-width)' : 'calc(var(--menu-width) * -1)',
    transition: { delay: 0.25, duration: duration, ease: easing }
  })
};

const motionDialog: Variants = {
  open: {
    opacity: 1,
    transition: { delay: 0.25, duration: duration, ease: easing }
  },
  closed: {
    opacity: 0,
    transition: { duration: duration, delay: 1, ease: easing }
  }
};

const motionDialogContent: Variants = {
  open: {
    opacity: 1,
    transition: { delay: 0.25, duration: duration, ease: easing }
  },
  closed: {
    opacity: 0,
    transition: { duration: duration, ease: easing }
  }
};

type DrawerPositionProps = 'left' | 'right';
type DrawerSizeProps = 'lg' | 'xl';

const _Modal = forwardRef<HTMLDivElement, ModalOverlayProps>((props, ref) => (
  <Modal ref={ref} {...props} />
));

const _ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>((props, ref) => (
  <ModalOverlay ref={ref} {...props} />
));

const _ModalDialog = forwardRef<HTMLElement, DialogProps>((props, ref) => (
  <Dialog ref={ref} {...props} />
));

export const DrawerHeader = (props: DialogHeaderProps) => <DialogHeader {...props} />;

export type DrawerTriggerProps = DialogTriggerProps;

export const DrawerTrigger = ({ children, ...props }: DrawerTriggerProps) => (
  <DialogTrigger {...props}>{children}</DialogTrigger>
);

const MotionModal = motion(_Modal);
const MotionOverlay = motion(_ModalOverlay);
const MotionDialog = motion(_ModalDialog);

export type DrawerProps = ModalOverlayProps & {
  position?: DrawerPositionProps;
  size?: DrawerSizeProps;
};

export const Drawer = ({
  children,
  position = 'right',
  size = 'lg',
  isDismissable = true,
  style,
  isOpen,
  ...props
}: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionOverlay
          {...props}
          isOpen={isOpen}
          style={style as CSSProperties}
          variants={motionOverlay}
          initial={'closed'}
          animate={'open'}
          exit={'closed'}
          isDismissable={isDismissable}
          className={clsx('fixed inset-0 z-header-safe bg-black/30')}
        >
          <MotionModal
            variants={motionModal}
            initial={'closed'}
            animate={'open'}
            exit={'closed'}
            custom={position}
            className={clsx(
              'fixed inset-y-0 h-full w-full p-4',
              size === 'lg' && 'max-w-drawer-lg [--menu-width:--drawer-lg]',
              size === 'xl' && 'max-w-drawer-xl [--menu-width:--drawer-xl]',
              position === 'left' && 'left-0',
              position === 'right' && 'right-0'
            )}
          >
            <MotionDialog
              role="dialog"
              variants={motionDialog}
              initial={'closed'}
              animate={'open'}
              exit={'closed'}
              className={clsx('h-full w-full overflow-hidden rounded-md bg-white outline-none')}
            >
              <motion.div
                variants={motionDialogContent}
                initial={'closed'}
                animate={'open'}
                exit={'closed'}
              >
                <>{children}</>
              </motion.div>
            </MotionDialog>
          </MotionModal>
        </MotionOverlay>
      )}
    </AnimatePresence>
  );
};
