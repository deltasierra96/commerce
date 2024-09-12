'use client';

import * as React from 'react';
import { clsx } from '@/utils';
import {
  Separator as RACSeparator,
  type SeparatorProps as RACSeparatorProps
} from 'react-aria-components';

export type SeparatorProps = RACSeparatorProps;

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <RACSeparator
      ref={ref}
      className={clsx(
        'block border-none bg-neutral-200',
        orientation === 'horizontal' ? 'my-1.5 h-[1px]' : 'mx-4 h-5 w-[1px]',
        className
      )}
      {...props}
    />
  )
);
