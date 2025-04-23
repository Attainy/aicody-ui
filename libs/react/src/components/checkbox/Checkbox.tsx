import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { mergeClass } from '../../utils/mergeClass';

const checkboxVariants = tv({
  base: 'inline-flex items-center gap-2 cursor-pointer',
  variants: {
    kind: {
      primary: '',
      secondary: '',
      outline: '',
      plain: '',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: { kind: 'primary', size: 'md' },
});

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ kind, size, label, className, ...props }, ref) => (
    <label className={mergeClass(checkboxVariants({ kind, size }), className)}>
      <input
        type="checkbox"
        ref={ref}
        className={mergeClass(
          'h-4 w-4 rounded border focus:ring-primary-main',
          kind === 'primary'
            ? 'border-primary-main text-primary-main'
            : kind === 'secondary'
            ? 'border-secondary-main text-secondary-main'
            : kind === 'outline'
            ? 'border-primary-main text-primary-main'
            : 'border-transparent text-inherit'
        )}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  )
);

Checkbox.displayName = 'Checkbox';
