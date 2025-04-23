import React from 'react';

export type ButtonVariant = 'default' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  asTag?: string;
}

export const ALLOWED_OVERRIDE_BUTTON_TAGS = ['a', 'div'] as const;
export const DEFAULT_BUTTON_TAG = 'button' as const;
