import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none border',
  variants: {
    kind: {
      primary:
        'bg-primary-main text-white hover:bg-primary-sub focus:ring-primary-main',
      secondary:
        'bg-secondary-main text-white hover:bg-secondary-sub focus:ring-secondary-main',
      outline:
        'bg-brand-white border-primary-main text-primary-main hover:bg-primary-main/10 focus:ring-primary-main',
      plain: 'bg-brand-black text-brand-white hover:opacity-80 focus:ring-0',
    },
    size: {
      sm: 'px-3 py-1 text-sm rounded',
      md: 'px-4 py-2 text-md rounded-md',
      lg: 'px-6 py-3 text-lg rounded-lg',
    },
  },
  defaultVariants: { kind: 'primary', size: 'md' },
});
