import { clsx } from '@/utils';
import React from 'react';

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('flex items-center border-t border-neutral-300 p-4 sm:p-5', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';
