import type { ArgTypes } from '@storybook/react';

/**
 * AICODY-UI 공통 ArgTypes 정의
 * - kind: 스타일 종류 (primary | secondary | outline | plain)
 * - size: 크기 (sm | md | lg)
 */
export const commonArgTypes: ArgTypes<any> = {
  kind: {
    control: { type: 'select' },
    options: ['primary', 'secondary', 'outline', 'plain'],
  },
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
  },
};
