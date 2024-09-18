import { clsx } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  ModalOverlay as RACModalOverlay,
  type ModalOverlayProps as RACModalOverlayProps
} from 'react-aria-components';

const overlayStyles = cva('fixed inset-0 isolate z-header-safe flex w-full bg-black/30', {
  variants: {
    isEntering: {
      true: 'duration-300 ease-out animate-in fade-in fill-mode-forwards'
    },
    isExiting: {
      true: 'duration-200 ease-in animate-out fade-out fill-mode-forwards'
    }
  }
});

export type OverlayProps = RACModalOverlayProps & VariantProps<typeof overlayStyles>;

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(({ className, ...rest }, ref) => {
  return (
    <RACModalOverlay
      {...rest}
      ref={ref}
      className={({ isEntering, isExiting }) =>
        clsx(
          overlayStyles({
            isEntering,
            isExiting,
            className
          })
        )
      }
    />
  );
});
