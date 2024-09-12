'use client';
import React, { forwardRef } from 'react';
import { clsx } from '@/utils';
import { Link, type LinkProps as RACLinkProps } from 'react-aria-components';
import { borderStyles, focusRing } from '../focus-ring';
import {
  type ButtonIconProps,
  ButtonIconNode,
  buttonIconStyles,
  ButtonIconCounter
} from './button-icon';
import { sharedButtonStyles } from '../button';

export type ButtonIconLinkProps = ButtonIconProps & RACLinkProps;

export const ButtonIconLink = forwardRef<HTMLAnchorElement, ButtonIconLinkProps>((props, ref) => {
  const {
    className,
    counter,
    icon,
    variant,
    counterVariant,
    size = 'default',
    compact,
    color,
    rounded,
    borderStyle,
    isLoading,
    ...rest
  } = props;

  return (
    <Link
      data-variant={variant}
      className={clsx(
        buttonIconStyles({ size, compact }),
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
    </Link>
  );
});

ButtonIconLink.displayName = 'ButtonIconLink';
