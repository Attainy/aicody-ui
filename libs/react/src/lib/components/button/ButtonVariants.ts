// aicody-ui/libs/react/src/components/button/ButtonVariants.ts
import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-colors',
  variants: {
    variant: {
      default: 'bg-slate-900 text-white hover:bg-slate-960',
      outline:
        'border-solid border border-slate-900 text-slate-900 hover:bg-gray-100',
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
