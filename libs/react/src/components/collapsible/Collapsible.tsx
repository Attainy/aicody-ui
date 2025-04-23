import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { mergeClass } from '../../utils/mergeClass';

export const collapsibleVariants = tv({
  base: 'w-full border rounded-md transition-colors',
  variants: {
    kind: {
      primary:
        'border-primary-main bg-primary-main/10 hover:bg-primary-main/20 text-primary-main',
      secondary:
        'border-secondary-main bg-secondary-main/10 hover:bg-secondary-main/20 text-secondary-main',
      outline:
        'border-primary-main bg-transparent hover:bg-primary-main/10 text-primary-main',
      plain: 'border-none bg-transparent text-inherit hover:bg-transparent',
    },
    size: {
      sm: 'p-2 text-sm',
      md: 'p-4',
      lg: 'p-6 text-lg',
    },
  },
  defaultVariants: { kind: 'primary', size: 'md' },
});

export type CollapsibleProps = Omit<
  React.DetailsHTMLAttributes<HTMLDetailsElement>,
  'open'
> &
  VariantProps<typeof collapsibleVariants>;

export const Collapsible = React.forwardRef<
  HTMLDetailsElement,
  CollapsibleProps
>(({ kind, size, className, children, ...props }, ref) => (
  <details
    ref={ref}
    className={mergeClass(collapsibleVariants({ kind, size }), className)}
    {...props}
  >
    {children}
  </details>
));
Collapsible.displayName = 'Collapsible';
