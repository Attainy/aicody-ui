import { tv } from 'tailwind-variants';

export const profilePhotoVariants = tv({
  base: 'relative inline-block overflow-hidden rounded-full bg-brand-gray',
  variants: {
    size: {
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-md',
      lg: 'h-14 w-14 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
