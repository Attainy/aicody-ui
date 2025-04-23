import React from 'react';
import { mergeClass } from '../../utils/mergeClass';
import { tv, VariantProps } from 'tailwind-variants';

export const alertVariants = tv({
  base: 'w-full rounded-md border-l-4 transition-colors',
  variants: {
    kind: {
      primary: 'border-primary-main bg-primary-main/10 text-primary-main',
      secondary:
        'border-secondary-main bg-secondary-main/10 text-secondary-main',
      outline:
        'border-primary-main bg-transparent text-primary-main hover:bg-primary-main/10',
      plain: 'border-none bg-transparent text-inherit',
    },
    size: {
      sm: 'p-2 text-sm',
      md: 'p-4',
      lg: 'p-6 text-lg',
    },
  },
  defaultVariants: { kind: 'primary', size: 'md' },
});

export type AlertDialogProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

export const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ kind, size, className, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={mergeClass(alertVariants({ kind, size }), className)}
      {...props}
    />
  )
);
AlertDialog.displayName = 'AlertDialog';
