import {
  Button,
  GridList as RACGridList,
  GridListItem as RACGridListItem,
  type GridListItemProps,
  type GridListProps
} from 'react-aria-components';
import React from 'react';
import { Checkbox } from '../checkbox';
import { cva } from 'class-variance-authority';
import { clsx } from '@/utils';
import { focusRing } from '../focus-ring';

export function GridList<T extends object>({ children, ...props }: GridListProps<T>) {
  return (
    <RACGridList
      {...props}
      className={clsx(
        'relative overflow-auto rounded-card border border-neutral-200 bg-white',
        props.className
      )}
    >
      {children}
    </RACGridList>
  );
}

const itemStyles = cva(
  'relative -mb-px flex cursor-default select-none gap-3 border-y border-transparent border-y-neutral-200 px-3 py-2 text-sm -outline-offset-2 first:border-t-0 last:mb-0 last:border-b-0',
  {
    variants: {
      isSelected: {
        false: 'text-gray-900 hover:bg-gray-100',
        true: 'border-blue-200 bg-blue-100 hover:bg-blue-200'
      },
      isDisabled: {
        true: 'text-slate-300 forced-colors:!text-[GrayText]'
      }
    }
  }
);

export function GridListItem({ children, ...props }: GridListItemProps) {
  const textValue = typeof children === 'string' ? children : undefined;
  return (
    <RACGridListItem
      textValue={textValue}
      {...props}
      className={clsx(itemStyles(), focusRing({ isFocusVisible: true }))}
    >
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
            <Checkbox slot="selection" />
          )}
          {children}
        </>
      )}
    </RACGridListItem>
  );
}
