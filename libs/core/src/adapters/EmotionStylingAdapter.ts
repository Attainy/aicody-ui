import { css } from '@emotion/css';
import type { StylingAdapter, VariantDefinition } from '../types';

export const EmotionStylingAdapter: StylingAdapter = {
  cn: (...classes: Array<string | undefined | null | false>) =>
    classes.filter(Boolean).join(' '),
  variants: <Opts extends Record<string, any>>(
    config: VariantDefinition<Opts>
  ) => {
    return (opts: Opts) => {
      const classList: string[] = [];
      if (config.base) {
        classList.push(
          ...(Array.isArray(config.base) ? config.base : [config.base])
        );
      }
      for (const key of Object.keys(config.variants) as (keyof Opts)[]) {
        const entry = config.variants[key][opts[key] as any];
        if (entry) {
          classList.push(...(Array.isArray(entry) ? entry : [entry]));
        }
      }
      return css`
        ${classList.join(' ')}
      `;
    };
  },
};
