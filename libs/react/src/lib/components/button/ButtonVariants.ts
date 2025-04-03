// aicody-ui/libs/react/src/components/button/ButtonVariants.ts
import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-colors',
  variants: {
    variant: {
      default:
        'bg-blue-500 text-white hover:bg-blue-600 border-solid border border-gray-300',
      outline:
        'border-solid border border-blue-500 text-blue-500 hover:bg-blue-50',
    },
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
