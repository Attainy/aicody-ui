export const spacing = {
  0: '0rem',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  4: '1rem',
  8: '2rem',
} as const;

export type SpacingTokens = typeof spacing;
