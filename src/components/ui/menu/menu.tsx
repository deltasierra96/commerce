import { clsx } from '@/utils';
import {
  Menu as RACMenu,
  MenuItem as RACMenuItem,
  MenuItemProps as RACMenuItemProps,
  MenuTrigger as RACMenuTrigger,
  type MenuProps as RACMenuProps,
  type MenuTriggerProps as RACMenuTriggerProps
} from 'react-aria-components';
import { Icon } from '../icon';
import { ListBoxItemDefaultProps, listBoxItemStyles } from '../list-box';
import { Popover, type PopoverProps } from '../popover';
import { Separator, type SeparatorProps } from '../separator';

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
        className="scrollbar-thin max-h-[inherit] overflow-auto p-1 outline-0"
      />
    </Popover>
  );
};

export type MenuTriggerProps = RACMenuTriggerProps;

export const MenuTrigger = (props: RACMenuTriggerProps) => {
  return <RACMenuTrigger {...props} />;
};

export type MenuItemProps = RACMenuItemProps & ListBoxItemDefaultProps;

export const MenuItem = ({ showCheck = true, icon, ...props }: MenuItemProps) => {
  const textValue =
    props.textValue ?? (typeof props.children === 'string' ? props.children : undefined);
  return (
    <RACMenuItem {...props} textValue={textValue} className={clsx(listBoxItemStyles)}>
      {({ selectionMode, isSelected, hasSubmenu }) => (
        <div className={clsx('flex w-full items-center gap-x-3 whitespace-nowrap')}>
          {icon && selectionMode !== 'multiple' && <Icon icon={icon} className="h-4 w-4" />}
          <span className="truncate font-normal">
            <>{props.children}</>
          </span>
          {showCheck && selectionMode !== 'none' && isSelected ? (
            <Icon icon="check" aria-hidden className="ml-auto h-4 w-4" />
          ) : null}
          {hasSubmenu ? (
            <Icon icon="chevron-right" aria-hidden className="ml-auto h-4 w-4" />
          ) : null}
        </div>
      )}
    </RACMenuItem>
  );
};

export const MenuSeparator = (props: SeparatorProps) => {
  return <Separator {...props} orientation="horizontal" />;
};
