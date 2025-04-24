import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { aspectRatioVariants } from './AspectRatioVariants';

export type AspectRatioProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof aspectRatioVariants> & {
    defaultImage?: string;
  };
