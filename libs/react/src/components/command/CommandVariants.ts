import { tv } from 'tailwind-variants';

export const itemVariants = tv({
  variants: {
    selected: {
      true: 'bg-blue-100 text-blue-800',
      false: 'hover:bg-gray-100',
    },
  },
  defaultVariants: {
    selected: false,
  },
});
