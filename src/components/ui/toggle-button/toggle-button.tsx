'use client';
import { clsx } from '@/utils';
import { forwardRef } from 'react';
import {
  ToggleButton as AriaToggleButton,
  type ButtonProps as RACButtonProps
} from 'react-aria-components';
import { buttonIconNodeStyles, ButtonProps, buttonStyles, sharedButtonStyles } from '../button';
import { focusRing } from '../focus-ring';
import { borderStyles } from '../focus-ring/focus-ring';
import { Icon } from '../icon';

export type ToggleButtonProps = RACButtonProps;

export const ToggleButton = forwardRef<HTMLButtonElement, ButtonProps & RACButtonProps>(
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
      <AriaToggleButton
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
      </AriaToggleButton>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';
