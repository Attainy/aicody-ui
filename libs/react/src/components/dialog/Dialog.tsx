import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { mergeClass } from '../../utils/mergeClass';

const dialogBackdropVariants = tv({
  base: 'fixed inset-0 flex items-center justify-center bg-black/40',
  variants: {
    kind: {
      primary: '',
      secondary: '',
      outline: '',
      plain: '',
    },
    size: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  defaultVariants: {
    kind: 'primary',
    size: 'md',
  },
});

export interface DialogProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogBackdropVariants> {
  open: boolean;
  onClose?: () => void;
}

export const Dialog = ({
  open,
  onClose,
  kind,
  size,
  className,
  children,
  ...props
}: DialogProps) => {
  if (!open) return null;
  return (
    <div
      className={mergeClass(dialogBackdropVariants({ kind, size }), className)}
      onClick={onClose}
      {...props}
    >
      <div
        className="bg-white rounded-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
Dialog.displayName = 'Dialog';
