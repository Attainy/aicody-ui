import { tv } from 'tailwind-variants';

export const checkboxInputVariants = tv({
  base: [
    'appearance-none relative inline-flex items-center justify-center',
    'border-2 rounded transition-colors',
  ].join(' '),
  variants: {
    kind: {
      primary: 'border-primary-main',
      secondary: 'border-secondary-main',
      outline: 'border-primary-main bg-transparent',
      plain: 'border-transparent',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
    mode: {
      filled: '', // 채워지는 모드
      iconOnly: '', // 아이콘만 모드
    },
  },
  compoundVariants: [
    // — filled 모드: checked 시 배경 채우고 흰색 체크 아이콘
    {
      kind: 'primary',
      mode: 'filled',
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
      mode: 'filled',
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
    // …outline, plain 등도 동일 패턴으로 추가…

    // — iconOnly 모드: 배경 변화 없이 체크 아이콘만 표시
    {
      kind: 'primary',
      mode: 'iconOnly',
      class: [
        'checked:before:content-["✓"]',
        'checked:before:absolute',
        'checked:before:inset-0',
        'checked:before:flex',
        'checked:before:items-center',
        'checked:before:justify-center',
        'checked:before:text-primary-main',
      ].join(' '),
    },
    {
      kind: 'secondary',
      mode: 'iconOnly',
      class: [
        'checked:before:content-["✓"]',
        'checked:before:absolute',
        'checked:before:inset-0',
        'checked:before:flex',
        'checked:before:items-center',
        'checked:before:justify-center',
        'checked:before:text-secondary-main',
      ].join(' '),
    },
    // …outline, plain 추가…
  ],
  defaultVariants: {
    kind: 'primary',
    size: 'md',
    mode: 'filled',
  },
});
