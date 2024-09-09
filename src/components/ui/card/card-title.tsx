import { clsx } from '@/utils';
import React from 'react';

type CardTitleProps = React.HTMLAttributes<HTMLDivElement>;

export const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return (
    <h3
      className={clsx('font-heading text-2xl leading-none tracking-tight', className)}
      {...props}
    />
  );
};

CardTitle.displayName = 'CardTitle';
