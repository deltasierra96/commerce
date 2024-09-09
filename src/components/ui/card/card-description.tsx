import { clsx } from '@/utils';
import React from 'react';

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={clsx('text-sm text-neutral-500', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';
