import React from 'react';
import { buttonVariants } from './ButtonVariants';
import { ButtonProps } from './button.types';
import { twMerge } from 'tailwind-merge';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ kind, size, className, ...props }, ref) => (
    <button
      ref={ref}
      className={twMerge(
        'inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none border border-brand-black px-3 py-1 rounded-md',
        buttonVariants({ kind, size }),
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';
