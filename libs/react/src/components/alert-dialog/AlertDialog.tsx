import React, { useEffect, useRef } from 'react';
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
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    onConfirm?.();
    handleClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      cancelButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  useEffect(() => {
    const handleTab = (e: KeyboardEvent) => {
      if (!dialogRef.current || !isOpen) return;

      const focusableElements = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleTab);
    }
    return () => window.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <Button type="button" kind={kind} size={size} onClick={handleOpen}>
        {triggerText}
      </Button>

      {isOpen && (
        <div
          className={twMerge(
            'fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 p-4 transition-opacity duration-200',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={dialogRef}
            className={twMerge(
              'bg-white rounded-lg shadow-lg p-6 w-full transform transition-transform duration-200',
              dialogContentVariants(),
              isOpen ? 'scale-100' : 'scale-95'
            )}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{description}</p>
            <div className="flex justify-end gap-2">
              <Button
                ref={cancelButtonRef}
                kind="outline"
                onClick={handleClose}
              >
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
