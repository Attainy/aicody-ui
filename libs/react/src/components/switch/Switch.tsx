import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { mergeClass } from '../../utils/mergeClass';

export const switchVariants = tv({
  base: 'inline-flex items-center cursor-pointer transition-colors focus:outline-none',
  variants: {
    kind: {
      primary: '',
      secondary: '',
      outline: '',
      plain: '',
    },
    size: {
      sm: 'h-4 w-8',
      md: 'h-5 w-10',
      lg: 'h-6 w-12',
    },
  },
  defaultVariants: {
    kind: 'primary',
    size: 'md',
  },
});

export interface SwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof switchVariants> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ kind, size, checked, onCheckedChange, className, ...props }, ref) => {
    const translate =
      size === 'sm'
        ? 'translate-x-4'
        : size === 'lg'
        ? 'translate-x-6'
        : 'translate-x-5';
    const reset = 'translate-x-1';
    return (
      <button
        ref={ref}
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange?.(!checked)}
        className={mergeClass(
          switchVariants({ kind, size }),
          checked ? 'bg-primary-main' : 'bg-gray-200',
          className
        )}
        {...props}
      >
        <span
          className={mergeClass(
            'bg-white rounded-full transition-transform',
            size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',
            checked ? translate : reset
          )}
        />
      </button>
    );
  }
);
Switch.displayName = 'Switch';
