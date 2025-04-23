export type VariantDefinition<O extends Record<string, any>> = {
  base?: string | string[];
  variants: {
    [K in keyof O]: Record<O[K] & string, string | string[]>;
  };
  defaultVariants?: Partial<O>;
};

export type VariantProps<D extends VariantDefinition<any>> =
  D extends VariantDefinition<infer O> ? Partial<O> : never;
