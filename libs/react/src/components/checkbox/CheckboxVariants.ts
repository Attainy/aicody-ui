import { tv } from 'tailwind-variants';

export const checkboxInputVariants = tv({
  variants: {
    kind: {
      primary: 'focus-visible:ring-primary-main',
      secondary: 'focus-visible:ring-secondary-main',
      outline: 'bg-brand-white focus-visible:ring-primary-main',
      plain: 'focus-visible:ring-brand-black',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
    shape: {
      rounded: 'rounded',
      square: 'rounded-none',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  compoundVariants: [
    // — filled 모드: checked 시 배경 채우고 흰색 체크 아이콘
    {
      kind: 'primary',
      class: [
        'checked:bg-primary-main',
        'checked:border-primary-main',
        'checked:before:content-["✓"]',
        'checked:before:absolute',
        'checked:before:inset-0',
        'checked:before:flex',
        'checked:before:items-center',
        'checked:before:justify-center',
        'checked:before:text-white',
      ].join(' '),
    },
    {
      kind: 'secondary',
      class: [
        'checked:bg-secondary-main',
        'checked:border-secondary-main',
        'checked:before:content-["✓"]',
        'checked:before:absolute',
        'checked:before:inset-0',
        'checked:before:flex',
        'checked:before:items-center',
        'checked:before:justify-center',
        'checked:before:text-white',
      ].join(' '),
    },
    {
      kind: 'plain',
      class: [
        'checked:bg-brand-black',
        'checked:border-brand-black',
        'checked:before:content-["✓"]',
        'checked:before:absolute',
        'checked:before:inset-0',
        'checked:before:flex',
        'checked:before:items-center',
        'checked:before:justify-center',
        'checked:before:text-white',
      ].join(' '),
    },

    // — outline: 배경 변화 없이 체크 아이콘만 표시
    {
      kind: 'outline',
      class: [
        'checked:before:content-["✓"]',
        'checked:before:absolute',
        'checked:before:inset-0',
        'checked:before:flex',
        'checked:before:items-center',
        'checked:before:justify-center',
        'checked:before:text-brand-black',
      ].join(' '),
    },
  ],
  defaultVariants: {
    kind: 'primary',
    size: 'md',
    disabled: false,
  },
});
