// src/components/Checkbox/Checkbox.types.ts
import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { checkboxInputVariants } from './CheckboxVariants';

export type CheckboxMode = 'filled' | 'iconOnly';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxInputVariants> {
  label?: React.ReactNode;
  className?: string;
  mode?: CheckboxMode; // 추가
}
