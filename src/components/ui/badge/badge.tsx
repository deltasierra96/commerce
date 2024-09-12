import * as React from 'react';
import { clsx } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { Icon, type IconTypeProps } from '../icon';

const badgeVariants = cva(
  'focus:ring-ring inline-flex items-center gap-x-1 rounded-full border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        'neutral-solid': 'border-neutral-500 bg-neutral-500 text-white',
        'neutral-subtle': 'border-neutral-500 bg-neutral-50 bg-neutral-500/15 text-neutral-500',
        'neutral-outline': 'border-neutral-500 bg-transparent text-neutral-500',
        'red-solid': 'border-red-500 bg-red-500 text-white',
        'red-subtle': 'border-red-500 bg-red-50 bg-red-500/15 text-red-500',
        'red-outline': 'border-red-500 bg-transparent text-red-500',
        'green-solid': 'border-green-500 bg-green-500 text-white',
        'green-subtle': 'border-green-500 bg-green-50 bg-green-500/15 text-green-500',
        'green-outline': 'border-green-500 bg-transparent text-green-500',
        'blue-solid': 'border-blue-500 bg-blue-500 text-white',
        'blue-subtle': 'border-blue-500 bg-blue-50 bg-blue-500/15 text-blue-500',
        'blue-outline': 'border-blue-500 bg-transparent text-blue-500',
        'yellow-solid': 'border-yellow-500 bg-yellow-500 text-white',
        'yellow-subtle': 'border-yellow-500 bg-yellow-50 bg-yellow-500/15 text-yellow-500',
        'yellow-outline': 'border-yellow-500 bg-transparent text-yellow-500'
      }
    },
    defaultVariants: {
      variant: 'neutral-outline'
    }
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants> & {
    icon?: IconTypeProps;
  };

export const Badge = ({ className, variant, icon, children, ...props }: BadgeProps) => {
  return (
    <div className={clsx(badgeVariants({ variant }), className)} {...props}>
      {icon ? <Icon icon={icon} className="h-4 w-4" /> : null}
      {children}
    </div>
  );
};
