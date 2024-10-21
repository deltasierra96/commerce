import { clsx } from '@/utils';
import { motion, MotionProps, Variants } from 'framer-motion';
import React, { forwardRef } from 'react';
import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
  type ModalOverlayProps
} from 'react-aria-components';
import { DialogHeader, DialogHeaderProps } from '../dialog';

const duration = 0.3;

const motionOverlay: Variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0,
    transition: { delay: 0.5, duration: duration, ease: [0.32, 0.72, 0, 1] }
  }
};

const motionModal: Variants = {
  visible: (position: DrawerPositionProps) => ({
    visibility: 'visible',
    opacity: 1,
    x: 0,
    transition: { delay: 0.125, duration: duration, ease: [0.32, 0.72, 0, 1] }
  }),
  hidden: (position: DrawerPositionProps) => ({
    visibility: 'hidden',
    opacity: 0,
    x: position === 'right' ? 'var(--menu-width)' : 'calc(var(--menu-width) * -1)',
    transition: { delay: 0.25, duration: duration, ease: [0.72, 0.32, 0, 1] }
  })
};

const motionDialogContent: Variants = {
  visible: {
    opacity: 1,
    transition: { delay: 0.25, duration: duration, ease: [0.32, 0.72, 0, 1] }
  },
  hidden: {
    opacity: 0,
    transition: { duration: duration, ease: [0.32, 0.72, 0, 1] }
  }
};

type DrawerPositionProps = 'left' | 'right';
type DrawerSizeProps = 'lg' | 'xl';

type _DrawerProps = ModalOverlayProps &
  MotionProps & {
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

const MotionModal = motion(_Modal);
const MotionOverlay = motion(_ModalOverlay);

const DrawerContext = React.createContext<_DrawerProps>({} as _DrawerProps);

const _Drawer = ({ children, ...props }: _DrawerProps) => {
  return (
    <DrawerContext.Provider value={{ ...props }}>
      <DialogTrigger {...props}>
        <>{children}</>
      </DialogTrigger>
    </DrawerContext.Provider>
  );
};

const useDrawer = () => {
  const context = React.useContext(DrawerContext);
  if (context === undefined) {
    throw new Error('useDrawer should be used within <Drawer> component.');
  }
  return context;
};

type AnimationState = 'unmounted' | 'hidden' | 'visible';

const Content = ({ children }: { children: React.ReactNode }) => {
  let [animation, setAnimation] = React.useState<AnimationState>('unmounted');

  const { position = 'right', size = 'xl', onOpenChange, ...restDrawerProps } = useDrawer();

  return (
    <MotionOverlay
      onOpenChange={(e) => {
        onOpenChange && onOpenChange(e);
        setAnimation(e ? 'visible' : 'hidden');
      }}
      isDismissable
      {...restDrawerProps}
      data-animation={animation}
      variants={motionOverlay}
      initial={'hidden'}
      animate={animation}
      exit={'hidden'}
      // Prevent modal from unmounting during animation.
      isExiting={animation === 'hidden'}
      // Reset animation state once it is complete.
      onAnimationComplete={(animation) => {
        setAnimation((a) => (animation === 'hidden' && a === 'hidden' ? 'unmounted' : a));
      }}
      className={clsx('fixed inset-0 z-header-safe h-full bg-black/30')}
    >
      <MotionModal
        {...restDrawerProps}
        variants={motionModal}
        initial={'hidden'}
        animate={animation}
        exit={'hidden'}
        custom={position}
        className={clsx(
          'fixed inset-y-0 h-full p-4',
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
            initial={'hidden'}
            animate={animation}
            exit={'hidden'}
          >
            {children}
          </motion.div>
        </Dialog>
      </MotionModal>
    </MotionOverlay>
  );
};

Content.displayName = 'Content';

export const Drawer = _Drawer as typeof _Drawer & {
  Content: typeof Content;
};

Drawer.Content = Content;
