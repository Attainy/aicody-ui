import { tv } from 'tailwind-variants';
import type { StylingAdapter, VariantDefinition } from '../types';

export const TailwindStylingAdapter: StylingAdapter = {
  mergeClass: (...classes) => classes.filter(Boolean).join(' '),
  variants: <Opts extends Record<string, any>>(
    config: VariantDefinition<Opts>
  ) => {
    const fn = tv(config as any);
    return (opts: Partial<Opts>) => fn(opts);
  },
};
