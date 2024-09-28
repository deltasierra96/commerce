'use client';
import { clsx } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { Button as AriaButton, type ButtonProps as RACButtonProps } from 'react-aria-components';
import { focusRing } from '../focus-ring';
import { borderStyles } from '../focus-ring/focus-ring';
import { Icon, type IconTypeProps } from '../icon';

export const sharedButtonStyles = cva(
  'relative inline-flex select-none items-center justify-center whitespace-nowrap border-button border-transparent leading-none outline-none transition-all duration-150 disabled:border-neutral-100 disabled:bg-neutral-100 disabled:text-neutral-400',
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
        neutral: '',
        danger: ''
      },
      variant: {
        filled: '',
        outline: '',
        subtle: '',
        ghost: '',
        link: 'underline'
      }
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'link',
        className: clsx(['pressed:text-primary-400', 'text-primary-500'])
      },
      {
        color: 'primary',
        variant: 'filled',
        className: clsx([
          'text-white',
          'bg-primary-500',
          'border-primary-500',
          'hover:bg-primary-400',
          'hover:border-primary-400',
          'pressed:bg-primary-600',
          'pressed:border-primary-600'
        ])
      },
      {
        color: 'primary',
        variant: 'ghost',
        className: clsx([
          'text-primary-500',
          'bg-transparent',
          'border-transparent',
          'hover:bg-primary-50',
          'hover:border-primary-50',
          'pressed:bg-primary-100',
          'pressed:border-primary-100'
        ])
      },
      {
        color: 'primary',
        variant: 'subtle',
        className: clsx([
          'text-primary-500',
          'bg-primary-50',
          'border-primary-50',
          'hover:bg-primary-100',
          'hover:border-primary-100',
          'pressed:bg-primary-200',
          'pressed:border-primary-200'
        ])
      },
      {
        color: 'primary',
        variant: 'outline',
        className: clsx([
          'bg-white',
          'text-primary-500',
          'border-primary-500',
          'hover:bg-primary-500',
          'hover:border-primary-500',
          'hover:text-white',
          'pressed:bg-primary-600',
          'pressed:border-primary-600'
        ])
      },
      {
        color: 'neutral',
        variant: 'link',
        className: clsx(['text-neutral-500'])
      },
      {
        color: 'neutral',
        variant: 'filled',
        className: clsx([
          'bg-neutral-100',
          'border-neutral-100',
          'text-neutral-600',
          'hover:border-neutral-200',
          'hover:bg-neutral-200',
          'pressed:border-neutral-300',
          'pressed:bg-neutral-300'
        ])
      },
      {
        color: 'neutral',
        variant: 'outline',
        className: clsx([
          'bg-white',
          'border-neutral-200',
          'text-neutral-600',
          'hover:border-neutral-100',
          'hover:bg-neutral-100',
          'hover:text-neutral-900',
          'pressed:border-neutral-200',
          'pressed:bg-neutral-200'
        ])
      },
      {
        color: 'neutral',
        variant: 'subtle',
        className: clsx([
          'border-neutral-100',
          'bg-neutral-100',
          'text-neutral-700',
          'hover:border-neutral-200',
          'hover:bg-neutral-200',
          'pressed:border-neutral-300',
          'pressed:bg-neutral-300'
        ])
      },
      {
        color: 'neutral',
        variant: 'ghost',
        className: clsx([
          'border-transparent',
          'bg-transparent',
          'text-neutral-700',
          'hover:border-neutral-100',
          'hover:bg-neutral-100',
          'hover:text-neutral-900',
          'pressed:border-neutral-200',
          'pressed:bg-neutral-200',
          'pressed:text-neutral-900'
        ])
      },

      {
        color: 'danger',
        variant: 'link',
        className: clsx('text-red-500 pressed:text-red-400')
      },
      {
        color: 'danger',
        variant: 'filled',
        className: clsx(
          'border-red-500 bg-red-500 text-white hover:border-red-400 hover:bg-red-400 pressed:border-red-600 pressed:bg-red-600'
        )
      },
      {
        color: 'danger',
        variant: 'outline',
        className: clsx(
          'border-red-500 bg-white text-red-500 hover:bg-red-100 hover:text-red-700 pressed:bg-red-200'
        )
      },
      {
        color: 'danger',
        variant: 'subtle',
        className: clsx(
          'border-red-50 bg-red-50 text-red-500 hover:border-red-100 hover:bg-red-100 pressed:border-red-200 pressed:bg-red-200'
        )
      },
      {
        color: 'danger',
        variant: 'ghost',
        className: clsx(
          'border-transparent bg-transparent text-red-500 hover:border-red-50 hover:bg-red-50 pressed:border-red-100 pressed:bg-red-100'
        )
      }
    ],
    defaultVariants: {
      variant: 'filled',
      color: 'neutral',
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
      <div className="flex animate-spin items-center justify-center">
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
