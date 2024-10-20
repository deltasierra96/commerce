import { clsx } from '@/utils';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { CSSProperties, forwardRef } from 'react';
import { Dialog, Modal, ModalOverlay, type ModalOverlayProps } from 'react-aria-components';
import { DialogHeader, DialogHeaderProps } from '../dialog';

const duration = 0.3;

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

type DrawerPositionProps = 'left' | 'right';
type DrawerSizeProps = 'lg' | 'xl';

type _DrawerProps = ModalOverlayProps & {
  position?: DrawerPositionProps;
  size?: DrawerSizeProps;
};

type _ModalProps = _DrawerProps;

const _Modal = forwardRef<HTMLDivElement, _ModalProps>((props, ref) => (
  <Modal ref={ref} {...props} />
));

type _ModalOverlayProps = ModalOverlayProps;

const _ModalOverlay = forwardRef<HTMLDivElement, _ModalOverlayProps>((props, ref) => (
  <ModalOverlay ref={ref} {...props} />
));

export const DrawerHeader = (props: DialogHeaderProps) => <DialogHeader {...props} />;

const MotionModal = motion(_Modal, { forwardMotionProps: true });
const MotionOverlay = motion(_ModalOverlay, { forwardMotionProps: true });

export const Drawer = ({
  position = 'right',
  size = 'xl',
  isDismissable = true,
  style,
  isOpen,
  children,
  ...props
}: _DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionOverlay
          {...props}
          style={style as CSSProperties}
          isOpen={isOpen}
          variants={motionOverlay}
          initial={'closed'}
          animate={'open'}
          exit={'closed'}
          isDismissable={isDismissable}
          className={clsx('fixed inset-0 z-header-safe bg-black/30')}
        >
          <MotionModal
            {...props}
            style={style as CSSProperties}
            isOpen={isOpen}
            variants={motionModal}
            initial={'closed'}
            animate={'open'}
            exit={'closed'}
            custom={position}
            isDismissable={isDismissable}
            className={clsx(
              'fixed inset-y-0 h-full p-1 sm:p-4',
              size === 'lg' && 'w-drawer-lg [--menu-width:--drawer-lg]',
              size === 'xl' && 'w-drawer-xl [--menu-width:--drawer-xl]',
              position === 'left' && 'left-0',
              position === 'right' && 'right-0'
            )}
          >
            <Dialog
              role="dialog"
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
            </Dialog>
          </MotionModal>
        </MotionOverlay>
      )}
    </AnimatePresence>
  );
};
