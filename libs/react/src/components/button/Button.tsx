import React from 'react';
import { mergeClass } from '../../utils/mergeClass';
import { buttonVariants } from './ButtonVariants';
import { ButtonProps } from './button.types';

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
