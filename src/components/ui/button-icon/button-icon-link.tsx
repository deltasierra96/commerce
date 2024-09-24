'use client';
import { clsx } from '@/utils';
import { forwardRef } from 'react';
import { Link, type LinkProps as RACLinkProps } from 'react-aria-components';
import { sharedButtonStyles } from '../button';
import { borderStyles, focusRing } from '../focus-ring';
import {
  ButtonIconCounter,
  ButtonIconNode,
  buttonIconStyles,
  type ButtonIconProps
} from './button-icon';

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
        buttonIconStyles({ size, compact, rounded }),
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
