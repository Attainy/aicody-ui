import { twMerge } from 'tailwind-merge';

export function mergeClass(
  variantClasses: string,
  ...extra: Array<string | false | null | undefined>
): string {
  return twMerge(variantClasses, extra.filter(Boolean).join(' '));
}
