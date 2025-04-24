import { tv } from 'tailwind-variants';

export const profilePhotoVariants = tv({
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
