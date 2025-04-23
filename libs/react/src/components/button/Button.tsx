import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { mergeClass } from '../../utils/mergeClass';

export const buttonVariants = tv({
  base: 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    kind: {
      primary:
        'bg-primary-main text-white hover:bg-primary-sub focus:ring-primary-main',
      secondary:
        'bg-secondary-main text-white hover:bg-secondary-sub focus:ring-secondary-main',
      outline:
        'bg-transparent border border-primary-main text-primary-main hover:bg-primary-main/10 focus:ring-primary-main',
      plain: 'bg-transparent text-inherit hover:bg-transparent focus:ring-0',
    },
    size: {
      sm: 'px-2 py-1 text-sm rounded',
      md: 'px-4 py-2 rounded-md',
      lg: 'px-6 py-3 rounded-lg',
    },
  },
  defaultVariants: { kind: 'primary', size: 'md' },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ kind, size, className, ...props }, ref) => (
    <button
      ref={ref}
      className={mergeClass(buttonVariants({ kind, size }), className)}
      {...props}
    />
  )
);
Button.displayName = 'Button';
