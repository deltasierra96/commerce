import { clsx } from '@/utils';
import { AnimatePresence, motion, MotionProps, Variants } from 'framer-motion';
import { forwardRef } from 'react';
import {
  Dialog,
  DialogProps,
  DialogTrigger,
  DialogTriggerProps as RACDialogTriggerProps,
  Modal as RACModal,
  type ModalOverlayProps as RACModalOverlayProps
} from 'react-aria-components';
import { DialogHeader, DialogHeaderProps } from '../dialog';
import { Overlay } from '../overlay';

export const DrawerTrigger = ({ children, ...props }: RACDialogTriggerProps) => {
  return (
    <DialogTrigger {...props}>
      <>{children}</>
    </DialogTrigger>
  );
};

type DrawerPositionProps = 'left' | 'right';

export type DrawerProps = RACModalOverlayProps &
  MotionProps & {
    positon?: DrawerPositionProps;
  };

type _DrawerProps = DrawerProps;

const _Drawer = forwardRef<HTMLDivElement, _DrawerProps>((props, ref) => (
  <RACModal ref={ref} {...props} />
));

type _DrawerDialogProps = DialogProps;

const _DrawerDialog = forwardRef<HTMLDivElement, _DrawerDialogProps>((props, ref) => (
  <Dialog ref={ref} {...props} />
));

const MotionDrawer = motion(_Drawer);
const MotionOverlay = motion(Overlay);
const MotionDialog = motion(_DrawerDialog);

export const DrawerHeader = (props: DialogHeaderProps) => <DialogHeader {...props} />;

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

const motionDrawer: Variants = {
  open: (position: DrawerPositionProps) => ({
    visibility: 'visible',
    opacity: 1,
    x: 0,
    left: position === 'left' ? 0 : 'auto',
    right: position === 'right' ? 0 : 'auto',
    transition: { delay: 0.125, duration: duration, ease: [0.32, 0.72, 0, 1] }
  }),
  closed: (position: DrawerPositionProps) => ({
    visibility: 'hidden',
    opacity: 0,
    x: position === 'right' ? '650px' : '-650px',
    left: position === 'left' ? 0 : 'auto',
    right: position === 'right' ? 0 : 'auto',
    transition: { delay: 0.25, duration: duration, ease: [0.72, 0.32, 0, 1] }
  })
};

const motionDialogContent: Variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.25, duration: duration, ease: [0.32, 0.72, 0, 1] }
  },
  closed: {
    opacity: 0,
    x: 10,
    transition: { duration: duration, ease: [0.32, 0.72, 0, 1] }
  }
};

export const Drawer = ({
  children,
  isDismissable = true,
  positon = 'right',
  ...props
}: DrawerProps) => {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <MotionOverlay
          {...props}
          isOpen
          variants={motionOverlay}
          initial={'closed'}
          animate={'open'}
          exit={'closed'}
          isDismissable={isDismissable}
          className={clsx('fixed inset-0 isolate z-header-safe flex w-full justify-end')}
        >
          <MotionDrawer
            {...props}
            variants={motionDrawer}
            initial={'closed'}
            animate={'open'}
            exit={'closed'}
            custom={positon}
            isDismissable={isDismissable}
            className={clsx('fixed h-full shrink-0 grow-0 basis-drawer overflow-hidden p-4')}
          >
            <MotionDialog
              role="dialog"
              className={clsx('h-full w-full overflow-hidden rounded-md bg-white outline-none')}
            >
              <motion.div
                variants={motionDialogContent}
                initial={'closed'}
                animate={'open'}
                exit={'closed'}
              >
                {children}
              </motion.div>
            </MotionDialog>
          </MotionDrawer>
        </MotionOverlay>
      )}
    </AnimatePresence>
  );
};
