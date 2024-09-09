import { clsx } from '@/utils';
import React from 'react';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx('p-3 sm:p-5', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';
