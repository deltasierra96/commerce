import { type VariantProps, cva } from 'class-variance-authority';
import { Icon, type IconTypeProps } from '../icon';
import { clsx } from '@/utils';

export type AlertProps = {
  showIcon?: boolean;
  children: React.ReactNode;
  icon?: IconTypeProps;
} & VariantProps<typeof alertContainerStyles>;

const alertContainerStyles = cva('rounded-alert border p-4 text-left text-sm', {
  variants: {
    variant: {
      success: 'border-green-300 bg-green-500/10 text-green-700',
      attention: 'border-yellow-300 bg-yellow-500/10 text-yellow-700',
      info: 'border-blue-300 bg-blue-500/10 text-blue-500',
      error: 'border-red-300 bg-red-50 text-red-700'
    }
  },
  defaultVariants: {
    variant: 'info'
  }
});

const alertIconStyles = cva('h-6 w-6', {
  variants: {
    variant: {
      success: 'text-green-400',
      attention: 'text-yellow-400',
      info: 'text-blue-400',
      error: 'text-red-400'
    }
  },
  defaultVariants: {
    variant: 'info'
  }
});

export type AlertIconProps = Pick<VariantProps<typeof alertContainerStyles>, 'variant'>;

const AlertIcon = ({ variant }: AlertIconProps) => {
  if (!variant) null;

  const StyledIcon = ({ icon }: { icon: IconTypeProps }) => (
    <Icon icon={icon} className={alertIconStyles({ variant })} />
  );

  switch (variant) {
    case 'attention':
      return <StyledIcon icon="alert-triangle-filled" />;
    case 'error':
      return <StyledIcon icon="circle-x-filled" />;
    case 'success':
      return <StyledIcon icon="circle-check-filled" />;
    case 'info':
    default:
      return <StyledIcon icon="info-circle-filled" />;
  }
};

export const Alert = ({ children, showIcon = true, variant }: AlertProps) => {
  if (!children) return null;
  return (
    <div className={alertContainerStyles({ variant })}>
      <div className="flex">
        {showIcon ? (
          <div className="flex-shrink-0">
            <AlertIcon variant={variant} />
          </div>
        ) : null}
        <div className={clsx(showIcon && 'ml-3')}>
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};
