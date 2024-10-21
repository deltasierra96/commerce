import { clsx } from '@/utils';
import { motion, MotionProps, Variants } from 'framer-motion';
import React, { forwardRef } from 'react';
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

const duration = 0.25;
const easing = [0.72, 0.32, 0, 1];

const motionOverlay: Variants = {
  visible: {
    opacity: 1,
    transition: { duration: duration, ease: easing }
  },
  hidden: {
    opacity: 0,
    transition: { duration: duration, delay: 0.5, ease: easing }
  }
};

const motionModal: Variants = {
  visible: (position: DrawerPositionProps) => ({
    visibility: 'visible',
    opacity: 1,
    x: 0,
    transition: { duration: duration, ease: easing }
  }),
  hidden: (position: DrawerPositionProps) => ({
    visibility: 'hidden',
    opacity: 0,
    x: position === 'right' ? 'var(--menu-width)' : 'calc(var(--menu-width) * -1)',
    transition: { duration: duration, delay: 0.25, ease: easing }
  })
};

const motionDialogContent: Variants = {
  visible: (position: DrawerPositionProps) => ({
    x: 0,
    opacity: 1,
    transition: { duration: duration, delay: 0.125, ease: easing }
  }),
  hidden: (position: DrawerPositionProps) => ({
    x: position === 'right' ? '10px' : '-10px',
    opacity: 0,
    transition: { duration: duration, ease: easing }
  })
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

type _ModalDialogProps = DialogProps;

const _ModalDialog = forwardRef<HTMLElement, _ModalDialogProps>((props, ref) => (
  <Dialog ref={ref} {...props} />
));

export const DrawerHeader = (props: DialogHeaderProps) => <DialogHeader {...props} />;

const MotionModal = motion(_Modal);
const MotionOverlay = motion(_ModalOverlay);
const MotionDialog = motion(_ModalDialog);

type AnimationState = 'unmounted' | 'hidden' | 'visible';

type Animation = {
  animation: AnimationState;
  setAnimation: React.Dispatch<React.SetStateAction<AnimationState>>;
};

const DrawerContext = React.createContext<_DrawerProps & Animation>({} as _DrawerProps & Animation);

const useDrawer = () => {
  const context = React.useContext(DrawerContext);
  if (context === undefined) {
    throw new Error('useDrawer should be used within <Drawer> component.');
  }
  return context;
};

type _DialogTriggerProps = DialogTriggerProps;

const _DrawerTrigger = ({ children, ...props }: _DialogTriggerProps) => {
  const { onOpenChange, setAnimation } = useDrawer();

  return (
    <DialogTrigger
      onOpenChange={(isOpen) => {
        setAnimation(isOpen ? 'visible' : 'hidden');
        onOpenChange ? onOpenChange(isOpen) : null;
      }}
    >
      <>{children}</>
    </DialogTrigger>
  );
};

const _Drawer = ({ children, position = 'left', size = 'lg', ...props }: _DrawerProps) => {
  let [animation, setAnimation] = React.useState<AnimationState>('unmounted');

  return (
    <DrawerContext.Provider value={{ size, position, animation, setAnimation, ...props }}>
      <>{children}</>
    </DrawerContext.Provider>
  );
};

const _DrawerContent = ({ children }: { children: React.ReactNode }) => {
  const { position, size, animation, setAnimation } = useDrawer();

  return (
    <MotionOverlay
      isDismissable
      // Prevent modal from unmounting during animation.
      isExiting={animation === 'hidden'}
      // Reset animation state once it is complete.
      onAnimationComplete={(animation) => {
        setAnimation((a) => (animation === 'hidden' && a === 'hidden' ? 'unmounted' : a));
      }}
      data-animation={animation}
      variants={motionOverlay}
      initial={'hidden'}
      animate={animation}
      exit={'hidden'}
      className={clsx('fixed inset-0 z-header-safe h-full w-full bg-black/30')}
    >
      <MotionModal
        data-position={position}
        variants={motionModal}
        custom={position}
        className={clsx(
          'fixed inset-y-0 h-full p-4',
          size === 'lg' && 'w-drawer-lg [--menu-width:--drawer-lg]',
          size === 'xl' && 'w-drawer-xl [--menu-width:--drawer-xl]',
          position === 'left' && 'left-0 right-auto',
          position === 'right' && 'left-auto right-0'
        )}
      >
        <MotionDialog
          custom={position}
          variants={motionDialogContent}
          role="dialog"
          className={clsx('h-full w-full overflow-hidden rounded-md bg-white')}
        >
          {children}
        </MotionDialog>
      </MotionModal>
    </MotionOverlay>
  );
};

export const Drawer = _Drawer as typeof _Drawer & {
  Content: typeof _DrawerContent;
  Trigger: typeof _DrawerTrigger;
};

_DrawerContent.displayName = 'Content';
_DrawerTrigger.displayName = 'Trigger';

Drawer.Content = _DrawerContent;
Drawer.Trigger = _DrawerTrigger;
