'use client';
import { clsx } from '@/utils';
import * as RadixLabel from '@radix-ui/react-label';
import { Label as RACLabel, type LabelProps as RACLabelProps } from 'react-aria-components';

export type LabelProps = RACLabelProps & {
  isRequired?: boolean;
};

export const Label = ({ className, children, hidden = false, isRequired, ...rest }: LabelProps) => {
  return (
    <RadixLabel.Root asChild>
      <RACLabel
        className={clsx(
          'mb-1.5 flex cursor-default items-center text-sm font-medium group-disabled/field-wrapper:cursor-default group-disabled/field-wrapper:text-neutral-400',
          hidden && 'sr-only',
          className
        )}
        {...rest}
      >
        {children}
        {isRequired ? (
          <span
            className="pointer-events-none ml-0.5 text-xs text-red-500 group-disabled:text-neutral-400"
            aria-hidden
          >
            *
          </span>
        ) : null}
      </RACLabel>
    </RadixLabel.Root>
  );
};
