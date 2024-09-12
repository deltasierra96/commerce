import {
  OverlayArrow,
  Popover as RACPopover,
  type PopoverProps as RACPopoverProps
} from 'react-aria-components';
import React from 'react';
import { clsx } from '@/utils';

export type PopoverProps = Omit<RACPopoverProps, 'children'> & {
  showArrow?: boolean;
  children: React.ReactNode;
};

export const popoverStyles = clsx(
  'min-w-40 rounded-md border border-neutral-200 bg-white shadow-2xl outline-none will-change-transform forced-colors:!bg-[Canvas]'
);

export function Popover({
  children,
  showArrow = true,
  className,
  placement,
  ...props
}: PopoverProps) {
  return (
    <RACPopover
      {...props}
      placement={placement}
      offset={showArrow ? 10 : 8}
      className={({ isEntering, isExiting }) =>
        clsx(
          isEntering && 'duration-200 ease-out animate-in fade-in',
          isEntering && 'placement-top:slide-in-from-bottom-1',
          isEntering && 'placement-bottom:slide-in-from-top-1',
          isEntering && 'placement-left:slide-in-from-right-1',
          isEntering && 'placement-right:slide-in-from-left-1',
          isExiting && 'duration-150 ease-in animate-out fade-out',
          isExiting && 'placement-top:slide-out-to-bottom-1',
          isExiting && 'placement-bottom:slide-out-to-top-1',
          isExiting && 'placement-left:slide-out-to-right-1',
          isExiting && 'placement-right:slide-out-to-left-1',
          popoverStyles,
          className
        )
      }
    >
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="block fill-white stroke-neutral-200 stroke-1 group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </RACPopover>
  );
}
