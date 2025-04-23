import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { mergeClass } from '../../utils/mergeClass';

const contextMenuVariants = tv({
  base: 'relative inline-block',
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

export interface ContextMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contextMenuVariants> {}

export const ContextMenu = React.forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ kind, size, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={mergeClass(contextMenuVariants({ kind, size }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
ContextMenu.displayName = 'ContextMenu';
