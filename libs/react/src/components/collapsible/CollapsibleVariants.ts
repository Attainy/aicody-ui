import { tv } from 'tailwind-variants';

export const triggerVariants = tv({
  variants: {
    kind: {
      primary: 'bg-primary-main text-white hover:bg-primary-main/90',
      secondary: 'bg-secondary-main text-white hover:bg-secondary-main/90',
      outline:
        'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100',
      plain: 'bg-brand-black text-white hover:bg-brand-black/90',
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
});

export const contentVariants = tv({
  variants: {
    kind: {
      primary: 'bg-primary-main/10',
      secondary: 'bg-secondary-main/10',
      outline: 'bg-transparent',
      plain: 'bg-brand-black/10',
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
});
