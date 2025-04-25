import { tv } from 'tailwind-variants';

export const triggerVariants = tv({
  variants: {
    kind: {
      primary:
        'border-primary-main text-primary-main hover:bg-primary-base hover:border-primary-base',
      secondary:
        'border-secondary-main text-secondary-main hover:bg-secondary-base hover:border-secondary-base',
      outline: 'border-brand-black text-brand-black hover:bg-brand-base',
      plain:
        'border-brand-black text-brand-black hover:bg-brand-base hover:border-brand-base',
    },
    isOpen: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      kind: 'primary',
      isOpen: true,
      class: 'bg-primary-base border-primary-base',
    },
    {
      kind: 'secondary',
      isOpen: true,
      class: 'bg-secondary-base border-secondary-base',
    },
    {
      kind: 'plain',
      isOpen: true,
      class: 'bg-brand-base border-brand-base',
    },
  ],
  defaultVariants: {
    kind: 'primary',
    isOpen: false,
  },
});

export const contentVariants = tv({
  base: 'absolute top-full left-0 mt-2 px-3 py-2 rounded-md transition-all duration-200 ease-in-out overflow-hidden border', // 애니메이션 속성 추가
  variants: {
    kind: {
      primary: 'border-primary-base',
      secondary: 'border-secondary-base',
      outline: 'border-brand-gray',
      plain: 'border-brand-base',
    },
    isOpen: {
      true: 'opacity-100 mt-2',
      false: 'max-h-0 opacity-0 -mt-2',
    },
  },
  defaultVariants: {
    kind: 'primary',
    isOpen: false,
  },
});
