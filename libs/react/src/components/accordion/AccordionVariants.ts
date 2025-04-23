import { tv } from 'tailwind-variants';

export const accordionVariants = tv({
  base: 'border rounded-md shadow-sm',
  variants: {
    variant: {
      default: '',
      ghost: 'bg-transparent border-none shadow-none',
    },
    size: {
      sm: 'text-sm px-3 py-2',
      md: 'text-base px-4 py-3',
      lg: 'text-lg px-5 py-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
