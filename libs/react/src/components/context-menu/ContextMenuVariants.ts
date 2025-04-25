import { tv } from 'tailwind-variants';

export const menuVariants = tv({
  variants: {
    isOpen: {
      true: 'opacity-100 translate-y-0',
      false: 'opacity-0 translate-y-[-5px] pointer-events-none',
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export const itemVariants = tv({
  base: 'flex items-center justify-between w-full px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100',
  variants: {
    isDanger: {
      true: 'text-red-600 hover:bg-red-50',
      false: '',
    },
  },
  defaultVariants: {
    isDanger: false,
  },
});
