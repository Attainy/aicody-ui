import { VariantProps } from 'tailwind-variants';
import { aspectRatioVariants } from './AspectRatioVariants';

export type Ratio = 'square' | 'video' | 'photo';

export interface AspectRatioProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Partial<VariantProps<typeof aspectRatioVariants>> {
  defaultImage?: string;
}
