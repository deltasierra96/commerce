import React, { type HTMLAttributes, forwardRef } from 'react';
import { clsx } from '@/utils';
import { Slot } from '@radix-ui/react-slot';

export type CardProps = {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>((props, forwardedRef) => {
  const { className, asChild, ...rest } = props;
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={clsx(
        'border border-neutral-200 bg-white shadow-sm shadow-neutral-100/25 max-sm:border-x-0 lg:rounded-card',
        className
      )}
      ref={forwardedRef}
      {...rest}
    />
  );
});

Card.displayName = 'Card';
