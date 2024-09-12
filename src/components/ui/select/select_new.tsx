'use client';
import React from 'react';
import {
  Button as RACButton,
  Select as RACSelect,
  SelectValue as RACSelectValue,
  ListBox as RACListBox,
  type SelectProps as RACSelectProps,
  type ValidationResult
} from 'react-aria-components';
import { Icon } from '../icon';
import {
  DropdownItem,
  ListBoxSection,
  type ListBoxSectionProps,
  type DropdownItemProps
} from '../list-box';
import { Popover } from '../popover';
import { clsx } from '@/utils';
import { Label } from '../label';
import { type InputBaseProps, inputResetStyles } from '../input';
import { FieldDescription, FieldError, FieldWrapper, type FieldWrapperProps } from '../form';

export type SelectProps<T extends object> = Omit<RACSelectProps<T>, 'children'> &
  FieldWrapperProps &
  InputBaseProps & {
    label?: string;
    hideLabel?: boolean;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
  };

const Root = <T extends object>(
  {
    label,
    description,
    errorMessage,
    children,
    items,
    leftSection,
    rightSection,
    hideLabel,
    validationBehavior = 'aria',
    size,
    isRequired,
    ...props
  }: SelectProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <RACSelect
      {...props}
      validationBehavior={validationBehavior}
      isInvalid={props.isInvalid}
      isDisabled={props.isDisabled}
      ref={ref}
    >
      {label && (
        <Label hidden={hideLabel} isRequired={isRequired}>
          {label}
        </Label>
      )}
      <FieldWrapper size={size} isInvalid={props.isInvalid} isDisabled={props.isDisabled}>
        <RACButton
          className={clsx('flex w-full cursor-default items-stretch text-start', inputResetStyles)}
        >
          {leftSection ? leftSection : null}
          <div className="group flex w-full min-w-0 select-none items-center px-3 text-left">
            <RACSelectValue className="truncate placeholder-shown:italic [&>div>*[slot=description]]:hidden" />
          </div>
          <div className="flex select-none items-center pr-2">
            <Icon
              icon="selector"
              aria-hidden
              className="h-5 w-5 text-neutral-500 forced-colors:!text-[ButtonText]"
            />
          </div>
          {rightSection ? rightSection : null}
        </RACButton>
      </FieldWrapper>

      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>

      <Popover className="w-[--trigger-width] p-2">
        <RACListBox items={items} className="max-h-[inherit] overflow-auto outline-none">
          {children}
        </RACListBox>
      </Popover>
    </RACSelect>
  );
};

const _Select = React.forwardRef(Root);

export type SelectItemProps = DropdownItemProps;

const SelectItem = (props: SelectItemProps) => {
  return <DropdownItem {...props} />;
};

const SelectSection = <T extends object>(props: ListBoxSectionProps<T>) => {
  return <ListBoxSection {...props} />;
};

export const Select = _Select as typeof _Select & {
  Item: typeof SelectItem;
  Section: typeof SelectSection;
};

Select.Item = SelectItem;
Select.Section = SelectSection;
