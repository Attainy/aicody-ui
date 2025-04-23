import React from 'react';
import { mergeClass } from '../../utils/mergeClass';
import { tv, VariantProps } from 'tailwind-variants';

export const accordionVariants = tv({
  base: 'w-full border rounded-md transition-colors',
  variants: {
    kind: {
      primary:
        'border-primary-main bg-primary-main/10 text-primary-main hover:bg-primary-main/20',
      secondary:
        'border-secondary-main bg-secondary-main/10 text-secondary-main hover:bg-secondary-main/20',
      outline:
        'border-primary-main bg-transparent text-primary-main hover:bg-primary-main/10',
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

export type AccordionProps = React.DetailsHTMLAttributes<HTMLDetailsElement> &
  VariantProps<typeof accordionVariants>;

export const Accordion = React.forwardRef<HTMLDetailsElement, AccordionProps>(
  ({ kind, size, className, ...props }, ref) => (
    <details
      ref={ref}
      className={mergeClass(accordionVariants({ kind, size }), className)}
      {...props}
    />
  )
);
Accordion.displayName = 'Accordion';
