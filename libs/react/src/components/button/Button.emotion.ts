import { css } from '@emotion/react';

export const buttonVariant = ({ size, intent }) =>
  css({
    padding:
      size === 'sm'
        ? '0.25rem 0.5rem'
        : size === 'lg'
        ? '0.75rem 1.5rem'
        : '0.5rem 1rem',
    backgroundColor: intent === 'primary' ? '#2563eb' : 'transparent',
    color: intent === 'primary' ? '#fff' : '#333',
    borderRadius: 6,
  });
