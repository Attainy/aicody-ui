// libs/react/src/types/button.ts
import React from 'react';

export type ButtonVariant = 'default' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

// ButtonProps 타입
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  asTag?: string;
}

// 기본 태그와 허용 오버라이드 태그 상수
export const DEFAULT_BUTTON_TAG = 'button';
export const ALLOWED_OVERRIDE_BUTTON_TAGS = ['a', 'div'] as const;
