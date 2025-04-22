import { VariantDefinition } from './variants.types';

export interface StylingAdapter {
  mergeClass: (...classes: Array<string | undefined | null | false>) => string;

  variants: <Opts extends Record<string, any>>(
    config: VariantDefinition<Opts>
  ) => (opts: Partial<Opts>) => string;
}
