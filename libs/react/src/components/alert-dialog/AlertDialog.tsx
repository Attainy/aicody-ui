import React from 'react';
import { dialogContentVariants } from './AlertDialogVariants';
import type { AlertDialogProps } from './AlertDialog.types';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button';

export const AlertDialog: React.FC<AlertDialogProps> = ({
  kind = 'primary',
  size = 'md',
  title = 'Confirm Your Action',
  description = 'Are you sure you want to proceed? This action cannot be undone.',
  triggerText = 'Take Action',
  cancelText = 'Cancel',
  confirmText = 'Continue',
  onConfirm,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    onConfirm?.();
    handleClose();
  };

  return (
    <>
      <Button type="button" kind={kind} size={size} onClick={handleOpen}>
        {triggerText}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div
            className={twMerge(
              'bg-white rounded-lg shadow-lg p-6 w-full',
              dialogContentVariants()
            )}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{description}</p>
            <div className="flex justify-end gap-2">
              <Button kind="outline" onClick={handleClose}>
                {cancelText}
              </Button>
              <Button
                type="button"
                kind={kind === 'outline' ? 'plain' : kind}
                size={size}
                onClick={handleConfirm}
              >
                {confirmText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

AlertDialog.displayName = 'AlertDialog';
