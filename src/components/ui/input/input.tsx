import { forwardRef } from 'react';
import {
  type InputProps as RACInputProps,
  Input as RACInput,
  type ValidationResult as RACValidationResult
} from 'react-aria-components';
import { clsx } from '@/utils';

export const inputResetStyles = clsx(
  'flex w-full min-w-0 truncate rounded-input border-none bg-transparent outline-none'
);

export type InputTextAddonProps = {
  className?: string;
  children?: React.ReactNode;
  position: 'left' | 'right';
};

export const InputTextAddon = forwardRef<HTMLDivElement, InputTextAddonProps>((props, ref) => {
  const { className, position, ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        'relative flex flex-1 items-center justify-center whitespace-nowrap border-neutral-300 px-4 font-normal text-inherit group-data-[disabled]:border-neutral-100',
        position === 'left' && 'rounded-r-none border-r-input',
        position === 'right' && 'rounded-l-none border-l-input',
        className
      )}
      {...rest}
    />
  );
});

InputTextAddon.displayName = 'InputTextAddon';

export type InputBaseProps = {
  label?: string;
  hideLabel?: boolean;
  className?: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  description?: string | React.ReactNode;
  errorMessage?: string | ((validation: RACValidationResult) => string);
};

export type InputProps = Omit<RACInputProps, 'size'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <RACInput {...props} ref={ref} className={clsx('px-3', inputResetStyles, className)} />;
});

Input.displayName = 'Input';
