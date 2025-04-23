import { tv } from 'tailwind-variants';

export const alertDialogVariants = tv({
  base: 'rounded-xl shadow-lg p-6 bg-white dark:bg-gray-900 border transition-all',
  variants: {
    variant: {
      default: 'border-gray-200',
      danger:
        'border-red-500 bg-red-50 text-red-900 dark:bg-red-900 dark:text-red-50',
    },
    size: {
      sm: 'w-64',
      md: 'w-96',
      lg: 'w-[32rem]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
