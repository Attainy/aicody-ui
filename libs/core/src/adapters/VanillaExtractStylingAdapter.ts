import { styleVariants } from '@vanilla-extract/css';
import type { StylingAdapter, VariantDefinition } from '../index';

export const VanillaExtractStylingAdapter: StylingAdapter = {
  cn: (...classes) => classes.filter(Boolean).join(' '),
  variants: <Opts extends Record<string, any>>(
    config: VariantDefinition<Opts>
  ) => {
    const sheets = styleVariants(
      Object.fromEntries(
        Object.entries(config.variants).map(([variantKey, variantMap]) => [
          variantKey,
          Object.fromEntries(
            Object.entries(variantMap).map(([val, styles]) => [
              val,
              styles as string,
            ])
          ),
        ])
      )
    );
    return (opts: Opts) => {
      const key = (Object.keys(opts) as (keyof Opts)[])
        .map((k) => opts[k])
        .join('-');
      return sheets[key];
    };
  },
};
