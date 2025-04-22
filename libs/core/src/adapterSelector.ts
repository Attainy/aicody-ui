import type { StylingAdapter } from './types/styling.types';
import {
  TailwindStylingAdapter,
  EmotionStylingAdapter,
  VanillaExtractStylingAdapter,
} from './adapters';
import { config } from './config';

let adapter: StylingAdapter;
switch (config.stylingEngine) {
  case 'emotion':
    adapter = EmotionStylingAdapter;
    break;
  case 'vanilla':
    adapter = VanillaExtractStylingAdapter;
    break;
  case 'tailwind':
  default:
    adapter = TailwindStylingAdapter;
}

export { adapter as StylingAdapter };
