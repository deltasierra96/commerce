'use client';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { clsx } from '@/utils';

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={clsx(
      'flex h-full w-full items-center justify-center rounded-full font-semibold text-neutral-900',
      className
    )}
    {...props}
  />
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
