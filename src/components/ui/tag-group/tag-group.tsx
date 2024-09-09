'use client';
import {
  Button,
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  type TagGroupProps as AriaTagGroupProps,
  TagList,
  type TagListProps,
  type TagProps as AriaTagProps,
} from 'react-aria-components';
import React from 'react';
import { cva } from 'class-variance-authority';
import { FieldDescription, FieldError } from '../form';
import { Label } from '../label';
import { Icon } from '../icon';
import { clsx } from '@/utils';
import { borderStyles, focusRing } from '../focus-ring';

const colors = {
  gray: 'bg-neutral-100 text-neutral-600 border-neutral-100 hover:border-neutral-300',
  green: 'bg-green-100 text-green-700 border-green-200 hover:border-green-300',
  yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200 hover:border-yellow-300',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300',
};

type Color = keyof typeof colors;

const tagStyles = cva(
  'flex max-w-fit cursor-default items-center gap-1 rounded-full border px-3 py-0.5 text-xs outline-none transition',
  {
    variants: {
      color: {
        gray: '',
        green: '',
        yellow: '',
        blue: '',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-sm',
      },
      isSelected: {
        true: 'border-transparent bg-blue-600 text-white forced-color-adjust-none forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]',
      },
      isDisabled: {
        true: 'bg-gray-100 text-gray-300 forced-colors:text-[GrayText]',
      },
    },
    defaultVariants: {
      rounded: true,
      color: 'green',
    },

    compoundVariants: (Object.keys(colors) as Color[]).map((color) => ({
      isSelected: false,
      color,
      class: colors[color],
    })),
  }
);

export type TagGroupProps<T> = Omit<AriaTagGroupProps, 'children'> &
  Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> & {
    label?: string;
    description?: string;
    errorMessage?: string;
    hideLabel?: boolean;
  };

export type TagProps = AriaTagProps & {
  color?: Color;
};

export function TagGroup<T extends object>({
  label,
  description,
  hideLabel = true,
  errorMessage,
  items,
  children,
  className,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) {
  return (
    <AriaTagGroup {...props} className={clsx('flex flex-col gap-1', className)}>
      <Label hidden={hideLabel}>{label}</Label>
      <TagList items={items} renderEmptyState={renderEmptyState} className='flex flex-wrap gap-1'>
        {children}
      </TagList>
      {description && <FieldDescription>{description}</FieldDescription>}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </AriaTagGroup>
  );
}

export function Tag({ children, color = 'gray', ...props }: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined;
  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={({ isDisabled, isSelected }) =>
        clsx(
          tagStyles({ isSelected, isDisabled, color }),
          focusRing({ isFocusVisible: true }),
          borderStyles({ isFocusVisible: true })
        )
      }
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot='remove'>
              <Icon icon='x' aria-hidden className='h-3 w-3' />
            </Button>
          )}
        </>
      )}
    </AriaTag>
  );
}
