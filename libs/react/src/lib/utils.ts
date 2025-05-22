import { twMerge } from 'tailwind-merge';

/**
 * Merge multiple class names using tailwind-merge
 */
export function cn(...inputs: (string | undefined | boolean)[]) {
  return twMerge(inputs.filter(Boolean).join(' '));
}
