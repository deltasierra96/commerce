'use client';
import { clsx } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { Button as AriaButton, type ButtonProps as RACButtonProps } from 'react-aria-components';
import { focusRing } from '../focus-ring';
import { borderStyles } from '../focus-ring/focus-ring';
import { Icon, type IconTypeProps } from '../icon';

export const sharedButtonStyles = cva(
  'relative inline-flex select-none items-center justify-center whitespace-nowrap border-button border-transparent leading-none outline-none transition-all duration-150',
  {
    variants: {
      rounded: {
        true: 'rounded-full',
        false: 'rounded-button'
      },
      borderStyle: {
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted'
      },
      color: {
        primary: '',
        secondary: ''
      },
      variant: {
        filled: '',
        outline: '',
        ghost: '',
        link: 'underline'
      }
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'link',
        className: clsx([
          'text-theme',
          'pressed:text-theme-pressed',
          'focus:pressed:text-theme-pressed',
          'disabled:text-theme-text-disabled'
        ])
      },
      {
        color: 'primary',
        variant: 'filled',
        className: clsx([
          'bg-theme',
          'text-theme-text-alt',
          'border-theme',
          'hover:bg-theme-hover',
          'hover:border-theme-hover',
          'pressed:bg-theme-pressed',
          'pressed:border-theme-pressed',
          'disabled:bg-theme-disabled',
          'disabled:border-theme-disabled',
          'disabled:text-theme-text-disabled'
        ])
      },
      {
        color: 'primary',
        variant: 'ghost',
        className: clsx([
          'text-theme',
          'bg-transparent',
          'border-transparent',
          'hover:text-theme',
          'pressed:text-theme',
          'hover:bg-theme',
          'hover:text-theme-text-alt',
          'hover:border-theme',
          'pressed:bg-theme-pressed',
          'pressed:border-theme-pressed',
          'focus:pressed:text-theme-text-alt',
          'disabled:text-theme-text-disabled'
        ])
      },
      {
        color: 'primary',
        variant: 'outline',
        className: clsx([
          'bg-white',
          'text-theme',
          'border-theme',
          'hover:bg-theme',
          'hover:border-theme',
          'hover:text-theme-text-alt',
          'pressed:bg-theme-pressed',
          'pressed:border-theme-pressed',
          'focus:pressed:text-theme-text-alt',
          'disabled:border-theme-disabled',
          'disabled:text-theme-text-disabled'
        ])
      },
      {
        color: 'secondary',
        variant: 'link',
        className: clsx([
          'text-secondary-text',
          'pressed:text-secondary-pressed',
          'disabled:text-secondary-text-disabled'
        ])
      },
      {
        color: 'secondary',
        variant: 'filled',
        className: clsx([
          'text-secondary-text',
          'bg-secondary',
          'border-secondary',
          'hover:bg-secondary-hover',
          'hover:border-secondary-hover',
          'pressed:bg-secondary-pressed',
          'pressed:border-secondary-pressed',
          'disabled:bg-secondary-disabled',
          'disabled:border-secondary-disabled',
          'disabled:text-secondary-text-disabled'
        ])
      },
      {
        color: 'secondary',
        variant: 'ghost',
        className: clsx([
          'text-secondary-text',
          'bg-transparent',
          'border-transparent',
          'hover:bg-secondary',
          'hover:border-secondary',
          'pressed:bg-secondary-pressed',
          'pressed:border-secondary-pressed',
          'disabled:text-secondary-text-disabled'
        ])
      },
      {
        color: 'secondary',
        variant: 'outline',
        className: clsx([
          'text-secondary-text',
          'border-secondary',
          'hover:bg-secondary',
          'hover:border-secondary',
          'pressed:bg-secondary-pressed',
          'pressed:border-secondary-pressed',
          'disabled:border-secondary-disabled',
          'disabled:text-secondary-text-disabled'
        ])
      }
    ],
    defaultVariants: {
      variant: 'filled',
      color: 'secondary',
      rounded: false,
      borderStyle: 'solid'
    }
  }
);

export const buttonStyles = cva('text-center font-button tracking-normal', {
  variants: {
    size: {
      sm: 'text-sm',
      default: 'text-sm',
      lg: 'text-sm'
    },
    compact: {
      true: null,
      false: null
    },
    block: {
      true: 'w-full'
    }
  },
  compoundVariants: [
    {
      compact: false,
      size: 'sm',
      className: 'h-button-sm px-3'
    },
    {
      compact: true,
      size: 'sm',
      className: 'h-button-compact-sm px-2'
    },
    {
      compact: false,
      size: 'default',
      className: 'h-button px-4'
    },
    {
      compact: true,
      size: 'default',
      className: 'h-button-compact px-2'
    },
    {
      compact: false,
      size: 'lg',
      className: 'h-button-lg px-6'
    },
    {
      compact: true,
      size: 'lg',
      className: 'h-button-compact-lg px-3'
    }
  ],
  defaultVariants: {
    size: 'default',
    compact: false
  }
});

export const buttonIconNodeStyles = cva(null, {
  variants: {
    size: {
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      default: 'h-4 w-4',
      lg: 'h-5 w-5'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

export type ButtonDefaultProps = {
  children?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
} & VariantProps<typeof sharedButtonStyles>;

export type ButtonProps = ButtonDefaultProps &
  VariantProps<typeof buttonStyles> & {
    leftIcon?: IconTypeProps;
    rightIcon?: IconTypeProps;
    loaderPosition?: 'left' | 'right';
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps & RACButtonProps>(
  (props, forwardedRef) => {
    const {
      size = 'default',
      block,
      isLoading,
      loaderPosition = 'right',
      borderStyle,
      rounded,
      variant,
      color,
      leftIcon,
      rightIcon,
      children,
      className,
      compact,
      ...rest
    } = props;

    const hasIconLeft = !!leftIcon;
    const hasIconRight = !!rightIcon;
    const hasLoadingIconLeft = isLoading && loaderPosition === 'left';
    const hasLoadingIconRight = isLoading && loaderPosition === 'right';

    const Loader = () => (
      <div className="flex items-center justify-center animate-spin">
        <Icon className={clsx(buttonIconNodeStyles({ size }))} icon="loader" />
      </div>
    );

    return (
      <AriaButton
        data-variant={variant}
        className={clsx(
          'gap-x-1.5',
          buttonStyles({
            size,
            block,
            compact
          }),
          sharedButtonStyles({ variant, color, rounded, borderStyle }),
          focusRing({ isFocusVisible: true }),
          borderStyles({ isFocusVisible: true }),
          className
        )}
        ref={forwardedRef}
        {...rest}
      >
        {hasIconLeft || hasLoadingIconLeft ? (
          isLoading && loaderPosition === 'left' ? (
            <Loader />
          ) : hasIconLeft ? (
            <Icon className={clsx(buttonIconNodeStyles({ size }))} icon={leftIcon} />
          ) : null
        ) : null}
        {children}
        {hasIconRight || hasLoadingIconRight ? (
          isLoading && loaderPosition === 'right' ? (
            <Loader />
          ) : hasIconRight ? (
            <Icon className={clsx(buttonIconNodeStyles({ size }))} icon={rightIcon} />
          ) : null
        ) : null}
      </AriaButton>
    );
  }
);

Button.displayName = 'Button';
