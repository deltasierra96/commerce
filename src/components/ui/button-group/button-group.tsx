import React, { forwardRef } from 'react';
import { clsx } from '@/utils';

export interface ButtonGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
  buttonBorderWidth?: number | string;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  return (
    <div
      {...props}
      className={clsx(
        '[&>*:not(:first-child)]:rounded-l-none',
        '[&>*:not(:last-child)]:rounded-r-none',
        '[&>*:not(:first-child)]:-ml-px'
      )}
      ref={ref}
    />
  );
});

ButtonGroup.displayName = 'ButtonGroup';
