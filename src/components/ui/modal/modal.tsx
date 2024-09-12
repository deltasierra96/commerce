'use client';
import { clsx } from '@/utils';
import React, { forwardRef } from 'react';
import {
  DialogTrigger as RACDialogTrigger,
  Modal as RACModal,
  type ModalOverlayProps as RACModalOverlayProps
} from 'react-aria-components';
import { type VariantProps, cva } from 'class-variance-authority';
import { Overlay } from '../overlay';
import { popoverStyles } from '../popover';
import { Dialog, DialogFooter, DialogHeader, type DialogProps } from '../dialog';
import { mergeProps } from 'react-aria';

const modalInnerStyles = cva('flex w-full justify-center py-10', {
  variants: {
    position: {
      top: 'items-start',
      bottom: 'items-end',
      center: 'items-center'
    }
  },
  compoundVariants: [
    {
      position: 'top',
      class: 'pt-10'
    },
    {
      position: 'bottom',
      class: 'pb-10'
    },
    {
      position: 'center',
      class: 'p-10'
    }
  ],
  defaultVariants: {
    position: 'center'
  }
});

const modalContentStyles = cva(
  'scrollbar-thin flex max-h-full w-full flex-col overflow-hidden align-middle',
  {
    variants: {
      position: {
        center: '',
        top: '',
        bottom: ''
      },
      size: {
        sm: 'max-w-sm',
        default: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        full: 'max-w-full'
      },
      isEntering: {
        true: 'duration-300 ease-out animate-in fade-in fill-mode-forwards'
      },
      isExiting: {
        true: 'duration-200 ease-in animate-out fade-out fill-mode-forwards'
      }
    },
    compoundVariants: [
      {
        isEntering: true,
        position: 'top',
        className: 'slide-in-from-top-5'
      },
      {
        isExiting: true,
        position: 'top',
        className: 'slide-out-to-top-5'
      },
      {
        isEntering: true,
        position: 'bottom',
        className: 'slide-in-from-bottom-5'
      },
      {
        isExiting: true,
        position: 'bottom',
        className: 'slide-out-to-bottom-5'
      },
      {
        isEntering: true,
        position: 'center',
        className: 'slide-in-from-top-5'
      },
      {
        isExiting: true,
        position: 'center',
        className: 'slide-out-to-top-5'
      }
    ],
    defaultVariants: {
      position: 'center',
      size: 'default'
    }
  }
);

export type ModalProps = RootProps;

type RootProps = Omit<RACModalOverlayProps, 'children'> &
  VariantProps<typeof modalContentStyles> &
  Omit<DialogProps, 'children'> & {
    title?: string;
    description?: string;
    showCloseButton?: boolean;
    children?: React.ReactNode;
  };

const ModalContext = React.createContext<RootProps>({} as RootProps);

const Root = ({ children, ...props }: RootProps) => {
  return (
    <ModalContext.Provider value={{ isDismissable: true, ...props }}>
      <RACDialogTrigger>
        <>{children}</>
      </RACDialogTrigger>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal should be used within <Modal> component.');
  }
  return context;
};

type ContentOptions = {
  close: () => void;
};

type ContentProps = {
  children: React.ReactNode | ((opts: ContentOptions) => React.ReactNode);
};

const Content = forwardRef<HTMLDivElement, ContentProps>(({ children, ...props }, ref) => {
  const modal = useModal();
  const contentProps = mergeProps(modal, props);

  const { position, isDismissable = true, size, role = 'dialog' } = contentProps;

  return (
    <Overlay {...contentProps} ref={ref} isDismissable={isDismissable}>
      <div className={modalInnerStyles({ position })}>
        <RACModal
          ref={ref}
          {...contentProps}
          className={({ isEntering, isExiting }) =>
            clsx(
              popoverStyles,
              modalContentStyles({
                isEntering,
                isExiting,
                position,
                size
              })
            )
          }
        >
          <Dialog role={role}>{children}</Dialog>
        </RACModal>
      </div>
    </Overlay>
  );
});

Content.displayName = 'Content';

export const Modal = Root as typeof Root & {
  Content: typeof Content;
  Header: typeof DialogHeader;
  Footer: typeof DialogFooter;
};

Modal.Header = DialogHeader;
Modal.Footer = DialogFooter;
Modal.Content = Content;
