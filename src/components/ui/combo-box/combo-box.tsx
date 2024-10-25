'use client';
import { clsx } from '@/utils';
import React from 'react';
import {
  ComboBox as RACComboBox,
  Group as RACGroup,
  type ComboBoxProps as RACComboBoxProps,
  type ValidationResult
} from 'react-aria-components';
import { ButtonIcon } from '../button-icon';
import {
  FieldDescription,
  FieldError,
  FieldWrapper,
  fieldWrapperSizeStyles,
  type FieldWrapperProps
} from '../form';
import { Input, type InputBaseProps } from '../input';
import { Label } from '../label';
import {
  DropdownItem,
  ListBox,
  ListBoxSection,
  type DropdownItemProps,
  type ListBoxSectionProps
} from '../list-box';
import { Popover } from '../popover';

export type ComboBoxProps<T extends object> = Omit<RACComboBoxProps<T>, 'children'> &
  InputBaseProps &
  FieldWrapperProps & {
    label?: string;
    hideLabel?: boolean;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
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
    menuTrigger = 'focus',
    size,
    ...props
  }: ComboBoxProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <RACComboBox
      {...props}
      menuTrigger={menuTrigger}
      validationBehavior={validationBehavior}
      isInvalid={props.isInvalid}
      isDisabled={props.isDisabled}
      ref={ref}
    >
      {label && (
        <Label hidden={hideLabel} isRequired={props.isRequired}>
          {label}
        </Label>
      )}

      <FieldWrapper size={size} isInvalid={props.isInvalid} isDisabled={props.isDisabled}>
        {leftSection ? leftSection : null}
        <RACGroup className="group flex w-full min-w-0 items-center pr-1 text-left">
          <Input className={clsx(fieldWrapperSizeStyles({ size }))} />
          <ButtonIcon variant={'ghost'} color={'secondary'} compact size={size} icon="selector" />
        </RACGroup>
        {rightSection ? rightSection : null}
      </FieldWrapper>

      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>

      <Popover className="w-[--trigger-width]">
        <ListBox
          items={items}
          className="scrollbar-thin scrollbar-track-neutral-400 scrollbar-thumb-neutral-200 max-h-[inherit] overflow-auto p-2 outline-0"
        >
          {children}
        </ListBox>
      </Popover>
    </RACComboBox>
  );
};

const _ComboBox = React.forwardRef(Root);

type ComboBoxItemProps = DropdownItemProps;

const Item = (props: ComboBoxItemProps) => {
  return <DropdownItem {...props} />;
};

export const Section = <T extends object>(props: ListBoxSectionProps<T>) => {
  return <ListBoxSection {...props} />;
};

export const ComboBox = _ComboBox as typeof _ComboBox & {
  Item: typeof Item;
  Section: typeof Section;
};

ComboBox.Item = Item;
ComboBox.Section = Section;
