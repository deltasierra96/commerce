'use client';
import { forwardRef } from 'react';
import { TextField, type TextFieldProps as RACTextFieldProps } from 'react-aria-components';
import { Label } from '../label';
import { Input, type InputBaseProps, type InputProps } from '../input';
import {
  FieldDescription,
  FieldError,
  FieldWrapper,
  fieldWrapperIconSizeStyles,
  type FieldWrapperProps
} from '../form';
import { Icon, type IconTypeProps } from '../icon';

export type TextInputProps = InputBaseProps &
  InputProps &
  FieldWrapperProps &
  RACTextFieldProps & {
    icon?: IconTypeProps;
  };

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      leftSection,
      rightSection,
      description,
      label,
      hideLabel,
      size,
      validationBehavior = 'aria',
      errorMessage,
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <TextField {...props} className="w-full" validationBehavior={validationBehavior}>
        <Label hidden={hideLabel} isRequired={props.isRequired}>
          {label}
        </Label>
        <FieldWrapper isInvalid={props.isInvalid} isDisabled={props.isDisabled} size={size}>
          {leftSection ? leftSection : null}
          {icon ? (
            <div className="flex flex-col items-center justify-center pl-3">
              <Icon icon={icon} className={fieldWrapperIconSizeStyles({ size })} />
            </div>
          ) : null}
          <Input ref={ref} />
          {rightSection ? rightSection : null}
        </FieldWrapper>
        {description && <FieldDescription>{description}</FieldDescription>}
        <FieldError>{errorMessage}</FieldError>
      </TextField>
    );
  }
);

TextInput.displayName = 'TextInput';
