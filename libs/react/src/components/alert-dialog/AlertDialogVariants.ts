import { tv } from 'tailwind-variants';

export const dialogVariants = tv({
  base: 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4',
});

export const dialogContentVariants = tv({
  base: 'bg-white rounded-lg shadow-lg p-6 w-full max-w-md',
});

export const dialogTitleVariants = tv({
  base: 'text-lg font-semibold text-gray-900 mb-2',
});

export const dialogDescriptionVariants = tv({
  base: 'text-sm text-gray-500 mb-4',
});

export const dialogButtonVariants = tv({
  base: 'px-4 py-2 rounded-md text-sm font-medium transition-colors',
  variants: {
    type: {
      cancel: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
      confirm: 'text-white',
    },
    kind: {
      primary: '',
      secondary: '',
      plain: '',
    },
  },
  compoundVariants: [
    {
      type: 'confirm',
      kind: 'primary',
      class: 'bg-primary-main hover:bg-primary-main/90',
    },
    {
      type: 'confirm',
      kind: 'secondary',
      class: 'bg-secondary-main hover:bg-secondary-main/90',
    },
    {
      type: 'confirm',
      kind: 'plain',
      class: 'bg-brand-black hover:bg-brand-black/90',
    },
  ],
  defaultVariants: {
    type: 'cancel',
    kind: 'primary',
  },
});

export const triggerButtonVariants = tv({
  base: 'px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100',
});
