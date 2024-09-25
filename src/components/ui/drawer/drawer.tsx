'use client';
import { clsx } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { mergeProps } from 'react-aria';
import {
  Dialog,
  DialogTrigger,
  Modal as RACModal,
  type ModalOverlayProps as RACModalOverlayProps
} from 'react-aria-components';
import { Overlay } from '../overlay';
import { popoverStyles } from '../popover';

export type DrawerProps = _DrawerProps;

type _DrawerProps = RACModalOverlayProps & VariantProps<typeof drawerContentStyles>;

const DrawerContext = React.createContext<_DrawerProps>({} as _DrawerProps);

const _Drawer = ({ children, ...props }: _DrawerProps) => {
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

const overlayStyles = cva('fixed inset-0 isolate z-header-safe flex w-full', {
  variants: {
    position: {
      top: 'items-start',
      bottom: 'items-end',
      left: 'justify-start',
      right: 'justify-end'
    },
    size: {
      xs: null,
      sm: null,
      default: null,
      lg: null,
      xl: null,
      full: null,
      '1/2': null,
      '2/3': null,
      '3/4': null
    }
  },
  compoundVariants: [
    // --------------------------------
    {
      position: 'top',
      size: ['1/2', '2/3', '3/4', 'default', 'lg', 'sm', 'xs', 'xl'],
      class: 'pb-10'
    },
    {
      position: 'bottom',
      size: ['1/2', '2/3', '3/4', 'default', 'lg', 'sm', 'xs', 'xl'],
      class: 'pt-10'
    },
    {
      position: 'right',
      size: ['1/2', '2/3', '3/4', 'default', 'lg', 'sm', 'xs', 'xl'],
      class: 'pl-10'
    },
    {
      position: 'left',
      size: ['1/2', '2/3', '3/4', 'default', 'lg', 'sm', 'xs', 'xl'],
      class: 'pr-10'
    }
  ],
  defaultVariants: {
    size: 'default',
    position: 'right'
  }
});

const drawerContentStyles = cva('overflow-hidden', {
  variants: {
    position: {
      top: null,
      bottom: null,
      left: null,
      right: null
    },
    rounded: {
      true: 'rounded-lg',
      false: 'rounded-none'
    },
    size: {
      xs: null,
      sm: null,
      default: null,
      lg: null,
      xl: null,
      full: null
    },
    isEntering: {
      true: 'duration-300 ease-out animate-in fade-in fill-mode-forwards'
    },
    isExiting: {
      true: 'duration-150 ease-in animate-out fade-out fill-mode-forwards'
    }
  },
  compoundVariants: [
    {
      position: ['left', 'right'],
      className: 'h-[--visual-viewport-height] max-h-full min-h-dvh max-w-full'
    },
    {
      position: ['top', 'bottom'],
      className: 'w-full'
    },
    {
      position: ['left', 'right'],
      size: 'xs',
      className: 'flex-[0_0_18rem]'
    },
    {
      position: ['left', 'right'],
      size: 'sm',
      className: 'flex-[0_0_22rem]'
    },
    {
      position: ['left', 'right'],
      size: 'default',
      className: 'flex-[0_0_32rem]'
    },
    {
      position: ['left', 'right'],
      size: 'lg',
      className: 'flex-[0_0_35rem]'
    },
    {
      position: ['left', 'right'],
      size: 'xl',
      className: 'flex-[0_0_44rem]'
    },
    {
      position: ['left', 'right'],
      size: 'full',
      className: 'w-full max-w-full'
    },
    {
      position: ['top', 'bottom'],
      size: 'sm',
      className: 'h-80'
    },
    {
      position: ['top', 'bottom'],
      size: 'default',
      className: 'h-96'
    },
    {
      position: ['top', 'bottom'],
      size: 'lg',
      className: 'h-[32rem]'
    },
    {
      position: ['top', 'bottom'],
      size: 'xl',
      className: 'h-[44rem]'
    },
    {
      position: ['top', 'bottom'],
      size: 'full',
      className: 'h-[--visual-viewport-height] min-h-dvh'
    },
    {
      position: 'top',
      size: ['default', 'lg', 'sm', 'xs', 'xl'],
      className: 'rounded-t-none'
    },
    {
      position: 'bottom',
      size: ['default', 'lg', 'sm', 'xs', 'xl'],
      className: 'rounded-b-none'
    },
    {
      position: 'right',
      size: ['default', 'lg', 'sm', 'xs', 'xl'],
      className: 'rounded-r-none'
    },
    {
      position: 'left',
      size: ['default', 'lg', 'sm', 'xs', 'xl'],
      className: 'rounded-l-none'
    },
    {
      isEntering: true,
      position: 'left',
      className: 'slide-in-from-left-96'
    },
    {
      isExiting: true,
      position: 'left',
      className: 'slide-out-to-left-96'
    },
    {
      isEntering: true,
      position: 'right',
      className: 'slide-in-from-right-96'
    },
    {
      isExiting: true,
      position: 'right',
      className: 'slide-out-to-right-96'
    },
    {
      isEntering: true,
      position: 'top',
      className: 'slide-in-from-top-96'
    },
    {
      isExiting: true,
      position: 'top',
      className: 'slide-out-to-top-96'
    },
    {
      isEntering: true,
      position: 'bottom',
      className: 'slide-in-from-bottom-96'
    },
    {
      isExiting: true,
      position: 'bottom',
      className: 'slide-out-to-bottom-96'
    }
  ],
  defaultVariants: {
    size: 'default',
    position: 'right',
    rounded: false
  }
});

type ContentProps = RACModalOverlayProps & VariantProps<typeof drawerContentStyles>;

const Content = forwardRef<HTMLDivElement, ContentProps>(({ children, ...props }, ref) => {
  const drawer = useDrawer();
  const contentProps = mergeProps(drawer, props);
  const { position, size, isDismissable = true } = contentProps;

  return (
    <Overlay
      {...contentProps}
      isDismissable={isDismissable}
      ref={ref}
      className={overlayStyles({
        position,
        size
      })}
    >
      <RACModal
        ref={ref}
        {...contentProps}
        isDismissable={isDismissable}
        className={({ isEntering, isExiting }) =>
          clsx(
            popoverStyles,
            drawerContentStyles({
              isEntering,
              isExiting,
              position,
              size
            }),
            'border-none'
          )
        }
      >
        <Dialog
          role="dialog"
          className="scrollbar-thin relative flex h-full w-full flex-col overflow-hidden outline-none"
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
