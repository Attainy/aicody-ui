import React, { useState, useEffect, useCallback, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { dialogVariants, inputVariants } from './DialogVariants';
import type { DialogProps } from './Dialog.types';
import { X } from 'lucide-react';
import { Button } from '../button';

export const Dialog: React.FC<DialogProps> = ({
  kind = 'primary',
  triggerText = 'Edit profile',
  title = 'Edit profile',
  description = "Make changes to your profile here. Click save when you're done.",
  initialName = 'Pedro Duarte',
  initialUsername = '@peduarte',
  initialEmail,
  cancelButtonText = 'Cancel',
  saveButtonText = 'Save changes',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(initialName);
  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState(initialEmail || '');
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);

    setName(initialName);
    setUsername(initialUsername);
    setEmail(initialEmail || '');
  };

  const handleSave = () => {
    console.log('Saved:', { name, username, email });
    handleClose();
  };

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        isOpen &&
        dialogRef.current &&
        !dialogRef.current.contains(e.target as Node)
      ) {
        handleClose();
      }
    },
    [isOpen]
  );

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, []);

  const handleFocusTrap = useCallback((e: KeyboardEvent) => {
    if (!dialogRef.current) return;

    const focusableElements = dialogRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab: 첫 요소에서 이전으로 이동 시 마지막 요소로
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab: 마지막 요소에서 다음으로 이동 시 첫 요소로
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      // 다이얼로그 열릴 때 첫 입력 필드에 포커스
      firstFocusableRef.current?.focus();
      document.addEventListener('keydown', handleFocusTrap);
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleFocusTrap);
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside, handleEsc, handleFocusTrap]);

  return (
    <div>
      <Button kind={kind} onClick={handleOpen}>
        {triggerText}
      </Button>

      {isOpen && (
        <div
          className={twMerge(
            'fixed inset-0 z-50 flex items-center justify-center bg-brand-gray/50 transition-all duration-200',
            dialogVariants({ isOpen })
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
        >
          <div
            ref={dialogRef}
            className={twMerge(
              'bg-white shadow-lg rounded-lg p-6 w-full max-w-md transition-all duration-200'
            )}
            onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트 전파 방지
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id="dialog-title" className="text-lg font-bold">
                {title}
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">{description}</p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  ref={firstFocusableRef}
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={twMerge(inputVariants())}
                />
              </div>

              {initialUsername && (
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={twMerge(inputVariants())}
                  />
                </div>
              )}

              {initialEmail && (
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={twMerge(inputVariants())}
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button
                kind="cancel"
                className={twMerge(
                  kind !== 'outline'
                    ? 'border-brand-black/80 text-brand-black/80'
                    : 'bg-brand-base border-brand-base text-brand-black hover:bg-brand-gray/50'
                )}
                onClick={handleClose}
              >
                {cancelButtonText}
              </Button>
              <Button kind={kind} onClick={handleSave}>
                {saveButtonText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Dialog.displayName = 'Dialog';
