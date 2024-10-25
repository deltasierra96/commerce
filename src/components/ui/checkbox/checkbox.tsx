'use client';

import { clsx } from '@/utils';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  type CheckboxGroupProps as RACCheckboxGroupProps,
  type CheckboxProps as RACCheckboxProps
} from 'react-aria-components';
import { borderStyles, focusRing } from '../focus-ring';
import { Icon } from '../icon';

const styles = cva(
  'flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border shadow-sm transition',
  {
    variants: {
      isSelected: {
        true: 'border-theme bg-theme group-pressed:border-neutral-800 group-pressed:bg-neutral-800 forced-colors:!border-[Highlight] forced-colors:!bg-[Highlight]',
        false: 'border-neutral-300 bg-white group-pressed:border-neutral-500'
      },
      isInvalid: {
        true: 'border-red-500 bg-red-500 text-white group-pressed:border-red-800 group-pressed:bg-red-400'
      },
      isDisabled: {
        true: 'border-neutral-100 bg-neutral-50 forced-colors:border-[GrayText]'
      }
    }
  }
);

const iconStyles =
  'w-4 h-4 text-white group-disabled:text-neutral-300 forced-colors:!text-[HighlightText] forced-colors:group-disabled:!text-[GrayText]';

export const CheckboxGroup = (props: RACCheckboxGroupProps) => <RACCheckboxGroup {...props} />;

export type CheckboxProps = RACCheckboxProps;

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ className, children, ...rest }, ref) => (
    <RACCheckbox
      ref={ref}
      className={clsx(
        'group flex items-center gap-2 text-sm transition forced-colors:disabled:!text-[GrayText]',
        className
      )}
      {...rest}
    >
      {({ isIndeterminate, isSelected, isDisabled, isInvalid }) => (
        <>
          <div
            className={clsx(
              styles({ isSelected: isSelected || isIndeterminate, isDisabled, isInvalid }),
              focusRing({ groupIsFocusVisible: true }),
              borderStyles({ groupIsFocusVisible: true })
            )}
          >
            {isSelected ? (
              <Icon icon="check" className={iconStyles} aria-hidden="true" />
            ) : isIndeterminate ? (
              <Icon icon="minus" className={iconStyles} aria-hidden="true" />
            ) : null}
          </div>
          {children}
        </>
      )}
    </RACCheckbox>
  )
);

Checkbox.displayName = 'Checkbox';
