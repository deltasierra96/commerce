'use client';
import { clsx } from '@/utils';
import { Label as RACLabel, type LabelProps as RACLabelProps } from 'react-aria-components';
import * as RadixLabel from '@radix-ui/react-label';

export type LabelProps = RACLabelProps & {
  isRequired?: boolean;
};

export const Label = ({ className, children, hidden = false, isRequired, ...rest }: LabelProps) => {
  return (
    <RadixLabel.Root asChild>
      <RACLabel
        className={clsx(
          'mb-1.5 flex cursor-default items-center text-sm font-normal group-disabled/field-wrapper:cursor-default group-disabled/field-wrapper:text-neutral-400',
          hidden && 'sr-only',
          className
        )}
        {...rest}
      >
        {children}
        {isRequired ? (
          <span
            className='pointer-events-none ml-0.5 text-xs text-red-500 group-disabled:text-neutral-400'
            aria-hidden
          >
            *
          </span>
        ) : null}
      </RACLabel>
    </RadixLabel.Root>
  );
};
