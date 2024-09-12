'use client';
import { forwardRef, useState } from 'react';
import {
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps
} from 'react-aria-components';
import { Label } from '../label';
import {
  FieldDescription,
  FieldError,
  FieldWrapper,
  fieldWrapperIconSizeStyles,
  type FieldWrapperProps
} from '../form';
import { Input, type InputBaseProps } from '../input';
import { Button } from '../button';
import { Icon } from '../icon';

export type PasswordInputProps = InputBaseProps &
  FieldWrapperProps &
  RACTextFieldProps & {
    enablePasswordInputToggle?: boolean;
    visibilityToggleLabel?: string;
  };

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const {
    enablePasswordInputToggle = true,
    visibilityToggleLabel,
    leftSection,
    rightSection,
    description,
    label,
    hideLabel,
    size,
    validationBehavior = 'aria',
    errorMessage,
    icon,
    ...rest
  } = props;

  const [isPasswordInputVisible, setPasswordInputVisible] = useState<boolean>(false);

  return (
    <>
      <RACTextField
        {...rest}
        type={isPasswordInputVisible ? 'text' : 'password'}
        className="w-full"
        validationBehavior={validationBehavior}
      >
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
          {enablePasswordInputToggle ? (
            <div className="flex items-stretch">
              <div className="me-1 flex items-center">
                <Button
                  size={size}
                  compact={true}
                  variant={'ghost'}
                  color="neutral"
                  // leftIcon={isPasswordInputVisible ? 'eye-off' : 'eye'}
                  aria-hidden={!visibilityToggleLabel}
                  aria-label={visibilityToggleLabel}
                  isDisabled={props.isDisabled}
                  // variant='filled' color='neutral'
                  onPress={() => setPasswordInputVisible(!isPasswordInputVisible)}
                >
                  {isPasswordInputVisible ? 'Hide' : 'Show'} Password
                </Button>
              </div>
              {rightSection}
            </div>
          ) : (
            rightSection
          )}
        </FieldWrapper>
        {description && <FieldDescription>{description}</FieldDescription>}
        <FieldError>{errorMessage}</FieldError>
      </RACTextField>
    </>
  );
});

PasswordInput.displayName = 'PasswordInput';
