import React from 'react';

import { Composer } from '../composer/Composer';
import { mergeAll } from '../../utils/mergeAll';
import { twMerge } from 'tailwind-merge';
import { aspectRatioVariants } from './AspectRatioVariants';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: 'square' | 'video' | 'photo';
  className?: string;
}

const AspectRatioBase = (
  { ratio = 'video', className, children, ...rest }: AspectRatioProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const baseClassName = aspectRatioVariants({ ratio });
  const mergedClassName = twMerge(baseClassName, className);

  const mergedProps = mergeAll({
    ...rest,
    className: mergedClassName,
    ref,
  });

  return (
    <div {...mergedProps}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export const AspectRatio = Composer(AspectRatioBase);
AspectRatio.displayName = 'AspectRatio';
