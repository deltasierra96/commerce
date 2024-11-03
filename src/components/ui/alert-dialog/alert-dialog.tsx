import React from 'react';
import { Button } from '../button';
import { Modal, useModal, type ModalProps } from '../modal';

export type AlertDialogProps = ModalProps & {
  children?: React.ReactNode;
  actionLabel?: string;
  cancelLabel?: string;
  onAction?: () => void;
};

const AlertDialogContext = React.createContext<AlertDialogProps>({} as AlertDialogProps);

export const useAlertDialog = () => {
  const context = React.useContext(AlertDialogContext);
  if (context === undefined) {
    throw new Error('useAlertDialog should be used within <AlertDialog> component.');
  }
  return context;
};

const _AlertDialog = ({
  children,
  role = 'alertdialog',
  position = 'center',
  isDismissable = true,
  actionLabel = 'Confirm',
  cancelLabel = 'Cancel',
  ...rest
}: AlertDialogProps) => {
  return (
    <AlertDialogContext.Provider
      value={{ actionLabel, cancelLabel, isDismissable, position, role, ...rest }}
    >
      <Modal {...rest} role={role} position={position} isDismissable={isDismissable}>
        {children}
      </Modal>
    </AlertDialogContext.Provider>
  );
};

const Content = ({ children, ...props }: AlertDialogProps) => {
  const { title, description, showCloseButton } = useModal();
  const { actionLabel, cancelLabel, onAction } = useAlertDialog();
  return (
    <Modal.Content {...props}>
      {({ close }) => (
        <>
          <Modal.Header showCloseButton={showCloseButton} description={description}>
            {title}
          </Modal.Header>
          <div className="p-4 text-sm text-neutral-600">{children}</div>
          <Modal.Footer className="flex justify-end gap-2">
            <Button onPress={close}>{cancelLabel}</Button>
            <Button variant="filled" color="primary" onPress={onAction}>
              {actionLabel}
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal.Content>
  );
};

export const AlertDialog = _AlertDialog as typeof _AlertDialog & {
  Content: typeof Content;
};

AlertDialog.Content = Content;
