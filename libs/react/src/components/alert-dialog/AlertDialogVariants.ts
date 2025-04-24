import { tv } from 'tailwind-variants';

export const dialogContentVariants = tv({
  variants: {
    size: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
