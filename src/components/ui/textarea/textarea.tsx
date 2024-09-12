'use client';
import { forwardRef } from 'react';
import {
  TextArea as RACTextArea,
  TextField,
  type TextAreaProps as RACTextAreaProps,
  type TextFieldProps
} from 'react-aria-components';
import { Label } from '../label';
import { type InputBaseProps, inputResetStyles } from '../input';
import { clsx } from '@/utils';
import { cva } from 'class-variance-authority';
import { FieldDescription, FieldError, FieldWrapper } from '../form';

export type TextAreaProps = TextFieldProps & InputBaseProps & RACTextAreaProps;

const textAreaStyles = cva(
  'min-h-[calc(theme(height.input)*2)] resize-y px-4 py-3 disabled:resize-none'
);

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      description,
      label,
      className,
      errorMessage,
      hideLabel,
      validationBehavior = 'aria',
      ...props
    },
    ref
  ) => {
    return (
      <TextField {...props} validationBehavior={validationBehavior}>
        <Label hidden={hideLabel} isRequired={props.isRequired}>
          {label}
        </Label>
        <FieldWrapper
          isInvalid={props.isInvalid}
          isDisabled={props.isDisabled}
          size={null}
          rounded={false}
        >
          <RACTextArea className={clsx(inputResetStyles, textAreaStyles(), className)} ref={ref} />
        </FieldWrapper>
        {description && <FieldDescription>{description}</FieldDescription>}
        <FieldError>{errorMessage}</FieldError>
      </TextField>
    );
  }
);

TextArea.displayName = 'TextArea';
