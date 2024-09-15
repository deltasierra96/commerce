'use client';
import { clsx } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import {
  FieldError as RACFieldError,
  Group as RACGroup,
  Text as RACText,
  type FieldErrorProps as RACFieldErrorProps,
  type GroupProps as RACGroupProps,
  type TextProps as RACTextProps
} from 'react-aria-components';
import {
  Controller,
  FormProvider,
  type ControllerProps,
  type FieldPath,
  type FieldValues
} from 'react-hook-form';
import { borderStyles, focusRing } from '../focus-ring';
import { Icon, type IconTypeProps } from '../icon';

export const Form = FormProvider;

export type FieldErrorProps = RACFieldErrorProps;

export const FieldError = ({ className, children, ...rest }: FieldErrorProps) => {
  if (!children) {
    return null;
  }
  return (
    <RACFieldError className={clsx('mt-2 flex text-sm text-red-500', className)} {...rest}>
      <>
        <Icon aria-hidden icon="exclamation-mark-circle" className="mr-1.5 h-4 w-4" />
        {children}
      </>
    </RACFieldError>
  );
};

export type FieldDescriptionProps = RACTextProps;

export const FieldDescription = ({ className, ...rest }: FieldDescriptionProps) => (
  <RACText
    {...rest}
    slot="description"
    className={clsx(
      'mt-2 block text-sm text-neutral-500 group-disabled:text-neutral-400',
      className
    )}
  />
);

export type FormFieldGroupSectionProps = {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
};

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  isDisabled?: boolean;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  isDisabled,
  ...props
}: Omit<ControllerProps<TFieldValues, TName>, 'disabled'> & {
  isDisabled?: boolean;
}) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name, isDisabled }}>
      <Controller {...props} disabled={isDisabled} />
    </FormFieldContext.Provider>
  );
};

export const fieldWrapperSizeStyles = cva('w-full', {
  variants: {
    size: {
      sm: 'h-input-sm',
      default: 'h-input',
      lg: 'h-input-lg'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

export const fieldWrapperIconSizeStyles = cva('text-neutral-400', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      default: 'h-4 w-4',
      lg: 'h-5 w-5'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

export const fieldWrapperBaseStyles = cva(
  'border-input border-neutral-200 bg-neutral-50 text-neutral-900 outline-none transition-colors duration-150 focus-within:bg-white hover:border-neutral-200 hover:bg-neutral-50 focus-within:hover:bg-white',
  {
    variants: {
      rounded: {
        true: 'rounded-full',
        false: 'rounded-input'
      }
    },
    defaultVariants: {
      rounded: false
    }
  }
);

export const fieldWrapperStyles = clsx(
  'relative flex w-full min-w-0 resize-none appearance-none items-stretch text-sm invalid:border-red-500 invalid:hover:border-red-400 disabled:border-neutral-100 disabled:bg-white disabled:text-neutral-400'
);

export type FieldWrapperProps = RACGroupProps &
  VariantProps<typeof fieldWrapperBaseStyles> &
  VariantProps<typeof fieldWrapperSizeStyles> &
  VariantProps<typeof fieldWrapperIconSizeStyles> & {
    icon?: IconTypeProps;
  };

export const FieldWrapper = ({ size, rounded, className, ...rest }: FieldWrapperProps) => {
  return (
    <RACGroup
      {...rest}
      className={clsx(
        fieldWrapperStyles,
        fieldWrapperBaseStyles({ rounded }),
        fieldWrapperSizeStyles({ size }),
        focusRing({ isFocusWithin: true }),
        borderStyles({ isFocusWithin: true }),
        className
      )}
    />
  );
};
