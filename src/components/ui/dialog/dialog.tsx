'use client';
import { clsx } from '@/utils';
import { useContext } from 'react';
import {
  type DialogProps as RACDialogProps,
  Dialog as RACDialog,
  Heading as RACHeading,
  OverlayTriggerStateContext as RACOverlayTriggerStateContext,
  Text as RACText
} from 'react-aria-components';
import { ButtonIcon } from '../button-icon';

export type DialogProps = RACDialogProps;

export const Dialog = ({ role = 'dialog', className, ...rest }: DialogProps) => (
  <RACDialog
    {...rest}
    role={role}
    className={clsx(
      'scrollbar-thin relative flex h-full w-full flex-col overflow-auto outline-none',
      className
    )}
  />
);

export type DialogHeaderProps = {
  children?: React.ReactNode;
  showCloseButton?: boolean;
  className?: string;
  description?: string;
};

export const DialogHeader = ({
  showCloseButton = true,
  description,
  children,
  className,
  ...rest
}: DialogHeaderProps) => {
  const state = useContext(RACOverlayTriggerStateContext);

  return (
    <div
      {...rest}
      className={clsx('sticky top-0 z-10 border-b border-neutral-100 bg-white p-2 px-4', className)}
    >
      <div className={clsx('flex items-stretch')}>
        <div className="flex flex-1 items-center">
          <RACHeading className={clsx('break-all text-base font-semibold')} slot="title">
            {children}
          </RACHeading>
          {description ? (
            <RACText slot="description" className="text-sm text-neutral-600">
              {description}
            </RACText>
          ) : null}
        </div>
        {showCloseButton ? (
          <ButtonIcon icon="x" variant="ghost" color="neutral" onPress={() => state.close()} />
        ) : null}
      </div>
    </div>
  );
};

export type DialogFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export const DialogFooter = ({ children, className, ...rest }: DialogFooterProps) => {
  return (
    <div {...rest} className={clsx('border-t border-neutral-100 bg-white p-4 sm:px-4', className)}>
      {children}
    </div>
  );
};
