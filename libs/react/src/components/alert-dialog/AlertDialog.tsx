import React from 'react';
import {
  dialogVariants,
  dialogContentVariants,
  dialogTitleVariants,
  dialogDescriptionVariants,
  dialogButtonVariants,
  triggerButtonVariants,
} from './AlertDialogVariants';
import type { AlertDialogProps } from './AlertDialog.types';
import { twMerge } from 'tailwind-merge';

const defaultAlertDialogProps = {
  kind: 'primary' as const,
  title: 'Are you absolutely sure?',
  description:
    'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
  triggerText: 'Show Dialog',
  cancelText: 'Cancel',
  confirmText: 'Continue',
};

export const AlertDialog: React.FC<AlertDialogProps> = ({
  kind,
  title,
  description,
  triggerText,
  cancelText,
  confirmText,
  onConfirm,
}: defaultAlertDialogProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    onConfirm?.();
    handleClose();
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={triggerButtonVariants()}
      >
        {triggerText}
      </button>

      {isOpen && (
        <div className={dialogVariants()}>
          <div className={dialogContentVariants()}>
            <h2 className={dialogTitleVariants()}>{title}</h2>
            <p className={dialogDescriptionVariants()}>{description}</p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleClose}
                className={dialogButtonVariants({ type: 'cancel', kind })}
              >
                {cancelText}
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className={dialogButtonVariants({ type: 'confirm', kind })}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

AlertDialog.displayName = 'AlertDialog';
