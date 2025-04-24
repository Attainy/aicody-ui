import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  variants: {
    kind: {
      primary:
        'bg-primary-main border-primary-main text-white hover:bg-primary-sub hover:border-primary-sub focus:ring-primary-main',
      secondary:
        'bg-secondary-main border-secondary-main text-white hover:bg-secondary-sub hover:border-secondary-sub focus:ring-secondary-main',
      outline:
        'bg-brand-white border-primary-main text-primary-main hover:bg-primary-base focus:ring-primary-main',
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
