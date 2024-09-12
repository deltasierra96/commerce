import { clsx } from '@/utils';
import { type HTMLAttributes } from 'react';

export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, fullWidth = false, ...props }: ContainerProps) => (
  <div
    {...props}
    className={clsx(
      'mx-auto w-full px-2 sm:px-4 lg:px-12',
      fullWidth ? 'max-w-full' : 'mx-auto max-w-screen-2xl',
      className
    )}
  />
);
