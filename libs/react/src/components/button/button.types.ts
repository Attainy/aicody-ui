import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { buttonVariants } from './ButtonVariants';

export type ButtonVariant = 'default' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const ALLOWED_OVERRIDE_BUTTON_TAGS = ['a', 'div'] as const;
export const DEFAULT_BUTTON_TAG = 'button' as const;
