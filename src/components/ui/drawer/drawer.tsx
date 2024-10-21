'use client';
import { clsx } from '@/utils';
import React, { forwardRef } from 'react';
import { mergeProps } from 'react-aria';
import {
  Dialog,
  DialogTrigger,
  Modal as RACModal,
  type ModalOverlayProps as RACModalOverlayProps
} from 'react-aria-components';
import { Overlay } from '../overlay';

export type DrawerProps = RACModalOverlayProps & {
  size?: ContentSizeProps;
  position?: ContentPositionProps;
};

const DrawerContext = React.createContext<DrawerProps>({} as DrawerProps);

const _Drawer = ({ children, ...props }: DrawerProps) => {
  return (
    <DrawerContext.Provider value={{ ...props }}>
      <DialogTrigger>
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

type ContentSizeProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
type ContentPositionProps = 'left' | 'right' | 'top' | 'bottom';

type ContentProps = RACModalOverlayProps;

const Content = forwardRef<HTMLDivElement, ContentProps>(({ children, ...props }, ref) => {
  const drawer = useDrawer();
  const {
    position = 'right',
    size = 'md',
    isDismissable = true,
    ...mergedProps
  } = mergeProps(drawer, props);

  return (
    <Overlay
      {...mergedProps}
      isDismissable={isDismissable}
      ref={ref}
      className={clsx(
        'fixed inset-0 isolate z-header-safe flex w-full',
        position === 'left' && 'justify-start',
        position === 'right' && 'justify-end',
        position === 'top' && 'items-start',
        position === 'bottom' && 'items-end'
      )}
    >
      <RACModal
        {...mergedProps}
        isDismissable={isDismissable}
        className={({ isEntering, isExiting }) =>
          clsx(
            'w-full shrink-0 grow-0 overflow-hidden border-none bg-white',
            size === 'xs' && 'basis-drawer-xs',
            size === 'sm' && 'basis-drawer-sm',
            size === 'md' && 'basis-drawer',
            size === 'lg' && 'basis-drawer-lg',
            size === 'xl' && 'basis-drawer-xl',
            size === 'full' && 'basis-drawer-full',
            position === 'left' ||
              (position === 'right' &&
                'h-[--visual-viewport-height] max-h-full min-h-dvh w-full max-w-full'),
            isEntering && 'duration-300 ease-out animate-in',
            isExiting && 'duration-300 ease-in animate-out',

            isEntering && position === 'left' && 'slide-in-from-left-96',
            isEntering && position === 'right' && 'delay-1000 slide-in-from-right-96',
            isEntering && position === 'top' && 'slide-in-from-top-96',
            isEntering && position === 'bottom' && 'slide-in-from-bottom-96',

            isExiting && position === 'left' && 'slide-out-to-left-96',
            isExiting && position === 'right' && 'slide-out-to-right-96',
            isExiting && position === 'top' && 'slide-out-to-top-96',
            isExiting && position === 'bottom' && 'slide-out-to-bottom-96'
          )
        }
      >
        <Dialog
          role="dialog"
          className={clsx(
            // '[[data-entering=true]_&]:bg-red-500',
            // '[[data-entering=true]_&]:duration-300',
            // '[[data-entering=true]_&]:animate-in',
            // '[[data-entering=true]_&]:ease-out',
            // // '[[data-entering=true]_&]:fill-mode-forwards',
            // '[[data-entering=true]_&]:fade-in',
            // // exiting
            // '[[data-exiting=true]_&]:bg-green-500',
            // '[[data-exiting=true]_&]:fade-out',
            // '[[data-exiting=true]_&]:duration-300',
            // '[[data-exiting=true]_&]:delay-700',
            // '[[data-exiting=true]_&]:animate-out',
            // '[[data-exiting=true]_&]:ease-out',
            // '[[data-exiting=true]_&]:fill-mode-forwards',
            // '[[data-exiting=true]_&]:fade-out',
            'scrollbar-thin relative flex h-full w-full flex-col overflow-hidden outline-none'
          )}
        >
          <>{children}</>
        </Dialog>
      </RACModal>
    </Overlay>
  );
});

Content.displayName = 'Content';

export const Drawer = _Drawer as typeof _Drawer & {
  Content: typeof Content;
};

Drawer.Content = Content;
