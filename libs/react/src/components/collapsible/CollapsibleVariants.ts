import { tv } from 'tailwind-variants';

export const triggerVariants = tv({
  base: 'flex items-center justify-between w-full px-4 py-2 rounded-md transition-colors cursor-pointer',
  variants: {
    kind: {
      primary:
        'bg-primary-base text-primary-main hover:bg-primary-main hover:text-white',
      secondary:
        'bg-secondary-base text-secondary-main hover:bg-secondary-main hover:text-white',
      plain: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    },
    isOpen: {
      true: 'rounded-b-none',
      false: '',
    },
  },
  defaultVariants: {
    kind: 'primary',
    isOpen: false,
  },
});

export const contentVariants = tv({
  base: 'transition-all duration-300 ease-in-out overflow-hidden',
  variants: {
    kind: {
      primary: 'bg-white border border-primary-base',
      secondary: 'bg-white border border-secondary-base',
      plain: 'bg-white border border-brand-base',
    },
    isOpen: {
      true: 'opacity-100',
      false: 'opacity-0 max-h-0',
    },
  },
  defaultVariants: {
    kind: 'primary',
    isOpen: false,
  },
});
