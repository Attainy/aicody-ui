import { tv } from 'tailwind-variants';

export const switchVariants = tv({
  variants: {
    size: {
      sm: 'h-4 w-7',
      md: 'h-5 w-9',
      lg: 'h-6 w-11',
    },
    kind: {
      primary: 'focus:ring-primary-main',
      secondary: 'focus:ring-secondary-main',
      plain: 'focus:ring-brand-black',
    },
    checked: {
      true: '',
      false: 'bg-gray-300',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  compoundVariants: [
    {
      kind: 'primary',
      checked: true,
      class: 'bg-primary-main',
    },
    {
      kind: 'secondary',
      checked: true,
      class: 'bg-secondary-main',
    },
    {
      kind: 'plain',
      checked: true,
      class: 'bg-brand-black',
    },
  ],
  defaultVariants: {
    size: 'md',
    kind: 'primary',
    checked: false,
    disabled: false,
  },
});

export const switchThumbVariants = tv({
  variants: {
    size: {
      sm: 'h-3 w-3 left-0.5',
      md: 'h-4 w-4 left-0.5',
      lg: 'h-5 w-5 left-[3px]',
    },
    checked: {
      true: '',
      false: 'translate-x-0',
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      checked: true,
      class: 'translate-x-3',
    },
    {
      size: 'md',
      checked: true,
      class: 'translate-x-4',
    },
    {
      size: 'lg',
      checked: true,
      class: 'translate-x-5',
    },
  ],
  defaultVariants: {
    size: 'md',
    checked: false,
  },
});

export const labelVariants = tv({
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
