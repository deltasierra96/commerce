import { clsx } from '@/utils';
import React from 'react';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'flex flex-col space-y-1.5 border-b border-neutral-300 px-3 py-2 sm:px-5 sm:py-3',
        className
      )}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';
