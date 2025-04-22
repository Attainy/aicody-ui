import type { StylingAdapter } from '../types';
import { TailwindStylingAdapter } from './TailwindStylingAdapter';

export const EmotionStylingAdapter: StylingAdapter = {
  mergeClass: TailwindStylingAdapter.mergeClass,
  variants: TailwindStylingAdapter.variants,
};
