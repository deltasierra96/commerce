'use client';
import { clsx } from '@/utils';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  NumberField,
  Button as RACButton,
  Group as RACGroup,
  type GroupProps,
  type NumberFieldProps,
  type ButtonProps as RACButtonProps
} from 'react-aria-components';
import { FieldDescription, FieldError, FieldWrapper, type FieldWrapperProps } from '../form';
import { Icon, type IconTypeProps } from '../icon';
import { Input, type InputBaseProps } from '../input';
import { Label } from '../label';

type NumberInputControlIconProps = {
  incrementIcon?: IconTypeProps;
  decrementIcon?: IconTypeProps;
};

type NumberInputControlProps = RACButtonProps & NumberInputControlIconProps;

const NumberInputControl = (props: NumberInputControlProps) => {
  const { className, incrementIcon, decrementIcon, slot, ...rest } = props;

  return (
    <RACButton
      className={clsx(
        'relative inline-flex flex-[0_0_50%] items-center justify-center whitespace-nowrap border-transparent bg-transparent px-4 text-center leading-none text-neutral-900 outline-none transition-colors duration-100 hover:border-neutral-100 hover:bg-neutral-100 pressed:border-neutral-100 pressed:bg-neutral-200 disabled:text-neutral-400',
        slot === 'increment' && 'rounded-tr-input',
        slot === 'decrement' && 'rounded-br-input',
        className
      )}
      slot={slot}
      {...rest}
    >
      <Icon
        icon={
          slot === 'increment' ? (incrementIcon ?? 'chevron-up') : (decrementIcon ?? 'chevron-down')
        }
        className="h-4 w-4"
      />
      <span className="sr-only">{slot === 'increment' ? 'Increment' : 'Decrement'}</span>
    </RACButton>
  );
};

const numberControlWrapperStyles = cva('h-input-addon flex w-10 flex-col divide-y border-l', {
  variants: {
    isDisabled: {
      true: 'divide-neutral-200 border-neutral-100',
      false: 'divide-neutral-100 border-neutral-100'
    }
  }
});

const NumberControlWrapper = (props: GroupProps) => {
  const { isDisabled = false } = props;
  return <RACGroup {...props} className={numberControlWrapperStyles({ isDisabled })} />;
};

export type NumberInputProps = InputBaseProps &
  NumberFieldProps &
  NumberInputControlIconProps &
  FieldWrapperProps & {
    enableControls?: boolean;
  };

export const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>((props, ref) => {
  const {
    leftSection,
    hideLabel,
    rightSection,
    description,
    enableControls = true,
    incrementIcon,
    decrementIcon,
    label,
    size,
    errorMessage,
    ...rest
  } = props;

  return (
    <NumberField ref={ref} {...rest}>
      <Label className={clsx(hideLabel && 'sr-only')} isRequired={props.isRequired}>
        {label}
      </Label>
      <FieldWrapper isInvalid={props.isInvalid} isDisabled={props.isDisabled} size={size}>
        <Input />
        {leftSection ? leftSection : null}
        {enableControls ? (
          <NumberControlWrapper isDisabled={props.isDisabled}>
            <NumberInputControl slot="increment" incrementIcon={incrementIcon} />
            <NumberInputControl slot="decrement" decrementIcon={decrementIcon} />
          </NumberControlWrapper>
        ) : null}
        {rightSection ? rightSection : null}
      </FieldWrapper>
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
    </NumberField>
  );
});

NumberInput.displayName = 'NumberInput';
