// 타입파라미터 O: variant 옵션 shape
export type VariantDefinition<O extends Record<string, any>> = {
  base?: string | string[];
  variants: {
    [K in keyof O]: Record<O[K] & string, string | string[]>;
  };
  defaultVariants?: Partial<O>;
};

// 컴포넌트 사용 시 Variant Props 추출
export type VariantProps<D extends VariantDefinition<any>> =
  D extends VariantDefinition<infer O> ? Partial<O> : never;
