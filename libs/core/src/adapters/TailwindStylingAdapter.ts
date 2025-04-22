import { tv } from 'tailwind-variants';
import type { StylingAdapter, VariantDefinition } from '../types';

export const TailwindStylingAdapter: StylingAdapter = {
  cn: (...classes: Array<string | undefined | null | false>) =>
    classes.filter(Boolean).join(' '),
  variants: <Opts extends Record<string, any>>(
    config: VariantDefinition<Opts>
  ) => {
    // tailwind-variants는 제네릭 타입 오버로드가 없으므로 `as any` 캐스팅
    const fn = tv(config as any);
    return (opts: Opts) => fn(opts);
  },
};
