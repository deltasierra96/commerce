'use client';
import { clsx } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import {
  OverlayArrow,
  Tooltip as RACToolTip,
  TooltipTrigger,
  type TooltipProps as RACTooltipProps,
  type TooltipTriggerComponentProps,
} from 'react-aria-components';

type TooltipProps = Omit<RACTooltipProps, 'children'> & {
  children: React.ReactNode;
} & VariantProps<typeof contentStyles>;

const contentStyles = cva(
  'group rounded-md border border-neutral-100 bg-white px-3 py-1.5 text-center text-sm font-medium text-neutral-900 shadow-md outline-none',
  {
    variants: {
      position: {
        top: 'mb-2',
        bottom: 'mt-2',
        center: 'm-2',
        left: 'mr-2',
        right: 'ml-2',
      },
      isEntering: {
        true: 'duration-75 ease-out animate-in fade-in',
      },
      isExiting: {
        true: 'duration-75 ease-in animate-out fade-out',
      },
    },
    compoundVariants: [
      // --------------
      {
        isEntering: true,
        position: 'top',
        class: 'slide-in-from-top-0.5',
      },
      {
        isExiting: true,
        position: 'top',
        class: 'slide-out-to-top-0.5',
      },
      // --------------
      {
        isEntering: true,
        position: 'bottom',
        class: 'slide-in-from-bottom-0.5',
      },
      {
        isExiting: true,
        position: 'bottom',
        class: 'slide-out-to-bottom-0.5',
      },
      // --------------
      {
        isEntering: true,
        position: 'left',
        class: 'slide-in-from-left-0.5',
      },
      {
        isExiting: true,
        position: 'left',
        class: 'slide-out-to-left-0.5',
      },
      // --------------
      {
        isEntering: true,
        position: 'right',
        class: 'slide-in-from-right-0.5',
      },
      {
        isExiting: true,
        position: 'right',
        class: 'slide-out-to-right-0.5',
      },
    ],
  }
);
const arrowStyles = cva('block h-2 w-2 fill-white', {
  variants: {
    position: {
      top: null,
      bottom: 'rotate-180',
      center: null,
      left: '-rotate-90',
      right: 'rotate-90',
    },
  },
});

const Content = ({ children, className, ...props }: TooltipProps) => {
  return (
    <RACToolTip
      {...props}
      className={({ isEntering, isExiting, placement }) =>
        clsx(contentStyles({ isEntering, isExiting, position: placement }), className)
      }
    >
      <OverlayArrow>
        {({ placement }) => (
          <svg className={arrowStyles({ position: placement })} viewBox='0 0 8 8'>
            <path d='M0 0 L4 4 L8 0' />
          </svg>
        )}
      </OverlayArrow>
      {children}
    </RACToolTip>
  );
};

const _Tooltip = ({ delay = 100, ...props }: TooltipTriggerComponentProps) => (
  <TooltipTrigger {...props} delay={delay} />
);

export const Tooltip = _Tooltip as typeof _Tooltip & {
  Content: typeof Content;
};

Tooltip.Content = Content;
