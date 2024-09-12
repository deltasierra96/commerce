'use client';
import { forwardRef } from 'react';
import {
  SearchField as RACSearchField,
  type SearchFieldProps as RACSearchFieldProps
} from 'react-aria-components';
import { ButtonIcon } from '../button-icon';
import { Icon } from '../icon';
import { Label } from '../label';
import {
  FieldDescription,
  FieldError,
  FieldWrapper,
  fieldWrapperIconSizeStyles,
  type FieldWrapperProps
} from '../form';
import { Input, type InputBaseProps, type InputProps } from '../input';
import { clsx } from '@/utils';

type SearchFieldProps = Omit<RACSearchFieldProps, 'size'>;

export type SearchInputProps = InputBaseProps & SearchFieldProps & InputProps;

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps & FieldWrapperProps>(
  (props, ref) => {
    const {
      className,
      leftSection,
      rightSection,
      description,
      label,
      hideLabel,
      rounded = false,
      size,
      validationBehavior = 'aria',
      errorMessage,
      ...rest
    } = props;

    return (
      <RACSearchField
        className={clsx('group w-full', className)}
        type="search"
        validationBehavior={validationBehavior}
        {...rest}
      >
        {label ? (
          <Label hidden={hideLabel} isRequired={props.isRequired}>
            {label}
          </Label>
        ) : null}
        <FieldWrapper
          rounded={rounded}
          isInvalid={props.isInvalid}
          isDisabled={props.isDisabled}
          size={size}
        >
          {leftSection ? leftSection : null}
          <div className="flex flex-col items-center justify-center pl-3">
            <Icon icon="search" className={fieldWrapperIconSizeStyles({ size })} />
          </div>
          <Input ref={ref} />
          <div className="mr-1 flex items-center justify-center">
            <ButtonIcon
              size={size}
              rounded={rounded}
              className="group-empty:invisible"
              variant="ghost"
              color="neutral"
              icon="x"
              compact
            />
          </div>
          {rightSection ? rightSection : null}
        </FieldWrapper>
        {description && <FieldDescription>{description}</FieldDescription>}
        <FieldError>{errorMessage}</FieldError>
      </RACSearchField>
    );
  }
);

SearchInput.displayName = 'SearchInput';
