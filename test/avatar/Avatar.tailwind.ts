import { tv } from 'tailwind-variants';

export const avatarVariants = tv({
  base: 'rounded-full object-cover',
  variants: {
    size: {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
    },
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});
