'use client';
import { clsx } from '@/utils';
import {
  Collection as RACCollection,
  Header as RACHeader,
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  Section as RACSection,
  type ListBoxItemProps as RACListBoxItemProps,
  type ListBoxProps as RACListBoxProps,
  type SectionProps as RACSectionProps
} from 'react-aria-components';
import { Icon, type IconTypeProps } from '../icon';

export type ListBoxProps<T extends object> = RACListBoxProps<T>;

export const ListBox = <T extends object>({ className, ...props }: ListBoxProps<T>) => (
  <RACListBox {...props} className={clsx('overflow-auto outline-none', className)} />
);

export const listBoxItemStyles = clsx(
  'group relative flex cursor-default select-none items-center rounded border-button border-transparent px-2 py-1.5 text-sm text-neutral-900 outline outline-0 forced-color-adjust-none focus:bg-primary-500 focus:text-white focus:pressed:bg-primary-600 disabled:text-neutral-500 forced-colors:focus:bg-[Highlight] forced-colors:focus:text-[HighlightText] forced-colors:disabled:!text-[GrayText]'
);

export type ListBoxItemDefaultProps = {
  icon?: IconTypeProps;
  isSelected?: boolean;
  showCheck?: boolean;
};

export type ListBoxItemProps = RACListBoxItemProps & ListBoxItemDefaultProps;

export const ListBoxItem = ({ children, ...props }: ListBoxItemProps) => {
  const textValue = props.textValue ?? (typeof children === 'string' ? children : undefined);
  return (
    <RACListBoxItem {...props} textValue={textValue} className={clsx(listBoxItemStyles)}>
      <>
        {children}
        <div className="absolute bottom-0 left-4 right-4 hidden h-px bg-white/20 group-disabled:border-neutral-50 group-disabled:bg-white forced-colors:bg-[HighlightText] [.group[data-selected]:has(+[data-selected])_&]:block" />
      </>
    </RACListBoxItem>
  );
};

export type ListBoxSectionProps<T> = RACSectionProps<T> & {
  title?: string;
};

export const ListBoxSection = <T extends object>({
  children,
  title,
  items,
  ...props
}: ListBoxSectionProps<T>) => {
  return (
    <RACSection {...props}>
      <RACHeader className="font-base truncate px-2 py-1 text-xs tracking-normal text-neutral-500">
        {title}
      </RACHeader>
      <RACCollection items={items}>{children}</RACCollection>
    </RACSection>
  );
};

export type DropdownItemProps = RACListBoxItemProps & ListBoxItemDefaultProps;

export const DropdownItem = ({ showCheck = true, icon, ...props }: DropdownItemProps) => {
  const textValue =
    props.textValue ?? (typeof props.children === 'string' ? props.children : undefined);
  return (
    <RACListBoxItem {...props} textValue={textValue} className={clsx(listBoxItemStyles)}>
      {({ selectionMode, isSelected }) => (
        <div className={clsx('flex w-full items-center gap-x-3 whitespace-nowrap')}>
          {icon && selectionMode !== 'multiple' && <Icon icon={icon} className="h-4 w-4" />}
          <span className="truncate font-normal">
            <>{props.children}</>
          </span>
          {showCheck && selectionMode !== 'none' && isSelected ? (
            <Icon icon="check" aria-hidden className="ml-auto h-4 w-4" />
          ) : null}
        </div>
      )}
    </RACListBoxItem>
  );
};
