import { styleVariants } from '@vanilla-extract/css';
import type { StylingAdapter, VariantDefinition } from '../types';

export const VanillaExtractStylingAdapter: StylingAdapter = {
  mergeClass: (...classes) => classes.filter(Boolean).join(' '),
  variants: <Opts extends Record<string, any>>(
    config: VariantDefinition<Opts>
  ) => {
    // build-time에 CSS 생성
    const sheets = styleVariants(
      Object.fromEntries(
        Object.entries(config.variants).map(([key, map]) => [
          key,
          Object.fromEntries(
            Object.entries(map).map(([val, cls]) => [val, cls as string])
          ),
        ])
      )
    );
    return (opts: Partial<Opts>) => {
      const key = (Object.keys(opts) as Array<keyof Opts>)
        .map((k) => opts[k])
        .join('-');
      return sheets[key] ?? '';
    };
  },
};
