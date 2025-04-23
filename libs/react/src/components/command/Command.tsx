import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { mergeClass } from '../../utils/mergeClass';

const commandVariants = tv({
  base: 'rounded-md border border-gray-200 bg-white p-2 shadow-lg flex flex-col gap-1',
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
  defaultVariants: {
    kind: 'primary',
    size: 'md',
  },
});

export interface CommandProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof commandVariants> {}

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ kind, size, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={mergeClass(commandVariants({ kind, size }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
Command.displayName = 'Command';
