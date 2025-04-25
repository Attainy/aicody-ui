import { tv } from 'tailwind-variants';

export const dialogVariants = tv({
  variants: {
    isOpen: {
      true: 'opacity-100',
      false: 'opacity-0 pointer-events-none',
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export const contentVariants = tv({
  variants: {
    isOpen: {
      true: 'scale-100',
      false: 'scale-95',
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export const inputVariants = tv({
  base: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
});
