'use client';
import React, { forwardRef } from 'react';
import { clsx } from '@/utils';
import { Icon, type IconTypeProps } from '../icon';
import { Button as RACButton, type ButtonProps as RACButtonProps } from 'react-aria-components';
import { sharedButtonStyles, type ButtonDefaultProps } from '../button';
import { focusRing, borderStyles } from '../focus-ring';
import { type VariantProps, cva } from 'class-variance-authority';

export const buttonIconStyles = cva('shrink-0', {
  variants: {
    size: {
      sm: null,
      default: null,
      lg: null,
    },
    compact: {
      true: null,
      false: null,
    },
  },
  compoundVariants: [
    {
      compact: false,
      size: 'sm',
      className: 'h-button-icon-sm w-button-icon-sm',
    },
    {
      compact: true,
      size: 'sm',
      className: 'h-button-icon-compact-sm w-button-icon-compact-sm',
    },
    {
      compact: false,
      size: 'default',
      className: 'h-button-icon w-button-icon',
    },
    {
      compact: true,
      size: 'default',
      className: 'h-button-icon-compact w-button-icon-compact',
    },
    {
      compact: false,
      size: 'lg',
      className: 'h-button-icon-lg w-button-icon-lg',
    },
    {
      compact: true,
      size: 'lg',
      className: 'h-button-icon-compact-lg w-button-icon-compact-lg',
    },
  ],
  defaultVariants: {
    size: 'default',
    compact: false,
  },
});

export const buttonIconNodeSizeStyles = cva('inline-flex shrink-0', {
  variants: {
    size: {
      sm: null,
      default: null,
      lg: null,
    },
    compact: {
      true: null,
      false: null,
    },
  },
  compoundVariants: [
    {
      compact: false,
      size: 'sm',
      className: 'h-4 w-4',
    },
    {
      compact: true,
      size: 'sm',
      className: 'h-3 w-3',
    },
    {
      compact: false,
      size: 'default',
      className: 'h-5 w-5',
    },
    {
      compact: true,
      size: 'default',
      className: 'h-4 w-4',
    },
    {
      compact: false,
      size: 'lg',
      className: 'h-5 w-5',
    },
    {
      compact: true,
      size: 'lg',
      className: 'h-4 w-4',
    },
  ],
  defaultVariants: {
    size: 'default',
    compact: false,
  },
});

export const buttonIconCounterStyles = cva(
  'absolute -top-0.5 inline-flex items-center justify-center rounded-full',
  {
    variants: {
      counterPosition: {
        left: '-left-0.5',
        right: '-right-0.5',
      },
      counterVariant: {
        primary: 'bg-primary-500 text-white',
      },
      size: {
        sm: 'h-4 w-4 text-xs',
        default: 'h-5 w-5 text-xs',
        lg: 'h-5 w-5 text-xs',
      },
    },
    defaultVariants: {
      counterPosition: 'right',
      counterVariant: 'primary',
      size: 'default',
    },
  }
);

export type ButtonIconNodeProps = {
  isLoading?: boolean;
  icon: IconTypeProps;
} & VariantProps<typeof buttonIconNodeSizeStyles>;

export const ButtonIconNode = ({ isLoading, icon, size, compact }: ButtonIconNodeProps) => {
  return (
    <div className={clsx('flex items-center justify-center', isLoading && ' animate-spin')}>
      <Icon
        className={clsx(buttonIconNodeSizeStyles({ size, compact }))}
        icon={isLoading ? 'loader' : icon}
      />
    </div>
  );
};

export type ButtonIconCounterProps = VariantProps<typeof buttonIconCounterStyles> & {
  counter?: number;
};

export const ButtonIconCounter = ({
  counterPosition,
  counter,
  counterVariant,
  size,
}: ButtonIconCounterProps) => {
  return Number.isInteger(counter) ? (
    <div className={clsx(buttonIconCounterStyles({ size, counterVariant, counterPosition }))}>
      {counter}
    </div>
  ) : null;
};

export type ButtonIconProps = ButtonDefaultProps &
  VariantProps<typeof buttonIconStyles> &
  ButtonIconCounterProps & {
    icon: IconTypeProps;
  };

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps & RACButtonProps>(
  (props, ref) => {
    const {
      className,
      counter,
      icon,
      variant,
      color,
      counterVariant,
      rounded,
      size = 'default',
      borderStyle,
      isLoading,
      compact,
      ...rest
    } = props;

    return (
      <RACButton
        data-variant={variant}
        className={clsx(
          buttonIconStyles({
            size,
            compact,
          }),
          sharedButtonStyles({ variant, color, rounded, borderStyle }),
          focusRing({ isFocusVisible: true }),
          borderStyles({ isFocusVisible: true }),
          className
        )}
        ref={ref}
        {...rest}
      >
        <ButtonIconCounter size={size} counter={counter} counterVariant={counterVariant} />
        <ButtonIconNode size={size} compact={compact} isLoading={!!isLoading} icon={icon} />
      </RACButton>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';
