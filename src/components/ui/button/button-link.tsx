'use client';

import React, { forwardRef } from 'react';
import { clsx } from '@/utils';
import { Icon } from '../icon';
import { Link, type LinkProps as RACLinkProps } from 'react-aria-components';
import { buttonStyles, type ButtonProps, buttonIconNodeStyles, sharedButtonStyles } from './button';
import { borderStyles, focusRing } from '../focus-ring';

export type ButtonLinkProps = ButtonProps & RACLinkProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>((props, forwardedRef) => {
  const {
    size = 'default',
    block,
    isLoading,
    loaderPosition = 'right',
    variant,
    color,
    borderStyle,
    leftIcon,
    rightIcon,
    children,
    rounded,
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
    <Link
      data-variant={variant}
      ref={forwardedRef}
      className={clsx(
        'gap-x-1.5',
        buttonStyles({
          size,
          block,
          compact
        }),
        sharedButtonStyles({ variant, rounded, color, borderStyle }),
        focusRing({ isFocusVisible: true }),
        borderStyles({ isFocusVisible: true }),
        className
      )}
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
    </Link>
  );
});

ButtonLink.displayName = 'Button';
