import {
  Menu as RACMenu,
  type MenuProps as RACMenuProps,
  MenuTrigger as RACMenuTrigger,
  type MenuTriggerProps as RACMenuTriggerProps,
} from 'react-aria-components';
import React from 'react';
import { DropdownItem, type DropdownItemProps } from '../list-box';
import { Separator, type SeparatorProps } from '../separator';
import { Popover, type PopoverProps } from '../popover';
import { clsx } from '@/utils';

type MenuProps<T> = RACMenuProps<T> & {
  placement?: PopoverProps['placement'];
};

export const Menu = <T extends object>({
  selectionMode = 'none',
  className,
  ...props
}: MenuProps<T>) => {
  return (
    <Popover placement={props.placement} className={clsx('min-w-48', className)}>
      <RACMenu
        selectionMode={selectionMode}
        {...props}
        className='max-h-[inherit] overflow-auto p-1 outline-0 scrollbar-thin'
      />
    </Popover>
  );
};

export type MenuTriggerProps = RACMenuTriggerProps;

export const MenuTrigger = (props: RACMenuTriggerProps) => {
  return <RACMenuTrigger {...props} />;
};

export type MenuItemProps = DropdownItemProps;
export const MenuItem = (props: MenuItemProps) => {
  return <DropdownItem {...props} />;
};

export const MenuSeparator = (props: SeparatorProps) => {
  return <Separator {...props} orientation='horizontal' />;
};
