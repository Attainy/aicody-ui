import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { checkboxInputVariants } from './CheckboxVariants';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxInputVariants> {
  label?: React.ReactNode;
  className?: string;
}
