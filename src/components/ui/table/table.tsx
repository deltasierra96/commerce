'use client';
import { clsx } from '@/utils';
import * as React from 'react';
import {
  Table as RACTable,
  TableBody as RACTableBody,
  Column as RACColumn,
  Group as RACGroup,
  Row as RACRow,
  Cell as RACCell,
  Collection as RACCollection,
  TableHeader as RACTableHeader,
  type TableBodyProps as RACTableBodyProps,
  type CellProps as RACCellProps,
  type RowProps as RACRowProps,
  type TableProps as RACTableProps,
  type ColumnProps as RACColumnProps,
  type TableHeaderProps as RACTableHeaderProps
} from 'react-aria-components';

const outlineStyles = clsx(
  'outline- outline-0 outline-offset-2 focus-visible:outline focus-visible:outline-2 forced-colors:outline-[Highlight]'
);

export type TableHeaderProps<T> = RACTableHeaderProps<T>;

export const TableHeader = <T extends object>({
  columns,
  children,
  ...rest
}: TableHeaderProps<T>) => {
  return (
    <RACTableHeader
      {...rest}
      className={clsx(
        'sticky top-0 z-10 bg-neutral-100 supports-[-moz-appearance:none]:bg-neutral-100 forced-colors:!bg-[Canvas]'
      )}
    >
      <RACCollection items={columns}>{children}</RACCollection>
    </RACTableHeader>
  );
};

export type TableBodyProps<T> = RACTableBodyProps<T>;

export const TableBody = <T extends object>({ className, ...props }: RACTableBodyProps<T>) => {
  return (
    <RACTableBody
      {...props}
      className={clsx('relative divide-y divide-neutral-200 [&_tr:last-child]:border-0', className)}
    />
  );
};

export type CellProps = RACCellProps;

export const Cell = ({ className, ...props }: CellProps) => (
  <RACCell
    {...props}
    className={clsx(
      outlineStyles,
      'border-b p-2 -outline-offset-2 [--selected-border:theme(colors.neutral.200)] group-last/row:border-b-0 group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border]',
      className
    )}
  />
);

export type RowProps<T> = RACRowProps<T>;

export const Row = <T extends object>({ className, columns, children, ...rest }: RowProps<T>) => {
  return (
    <RACRow
      {...rest}
      className={clsx(
        outlineStyles,
        'group/row relative cursor-default select-none text-sm text-neutral-900 -outline-offset-2 hover:bg-neutral-50 selected:bg-neutral-100/50 selected:hover:bg-neutral-100/75 disabled:text-neutral-300',
        className
      )}
    >
      <RACCollection items={columns}>{children}</RACCollection>
    </RACRow>
  );
};

export type ColumnProps = Omit<RACColumnProps, 'children'> & { children: React.ReactNode };

export const Column = ({ className, ...props }: ColumnProps) => (
  <RACColumn
    {...props}
    className={clsx(
      'cursor-default text-start text-sm font-medium text-neutral-700 [&:first-of-type]:rounded-l-md [&:focus-within]:z-20 [&:hover]:z-20 [&:last-of-type]:rounded-r-md',
      className
    )}
  >
    {({ allowsSorting, sortDirection }) => (
      <RACGroup
        role="presentation"
        className="group flex items-center gap-x-1 truncate px-2 py-2.5"
      >
        {props.children}
        {allowsSorting && (
          <svg
            role="img"
            className={clsx(
              'h-5 w-5 fill-none stroke-icon opacity-100 group-hover:opacity-100 group-focus-visible:opacity-100',
              sortDirection ? 'opacity-100' : 'opacity-0'
            )}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {sortDirection === 'descending' ? (
              <>
                <path strokeOpacity={1} d="M8 9l4 -4l4 4"></path>
                <path strokeOpacity={0.33} d="M16 15l-4 4l-4 -4"></path>
              </>
            ) : sortDirection === 'ascending' ? (
              <>
                <path strokeOpacity={0.33} d="M8 9l4 -4l4 4"></path>
                <path strokeOpacity={1} d="M16 15l-4 4l-4 -4"></path>
              </>
            ) : (
              <>
                <path strokeOpacity={1} d="M8 9l4 -4l4 4"></path>
                <path strokeOpacity={1} d="M16 15l-4 4l-4 -4"></path>
              </>
            )}
          </svg>
        )}
      </RACGroup>
    )}
  </RACColumn>
);

export type TableProps = RACTableProps;

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <RACTable {...props} ref={ref} className={clsx('min-w-full bg-white', className)} />
  )
);
Table.displayName = 'Table';
