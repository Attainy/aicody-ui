import React from 'react';
import { aspectRatioVariants } from './AspectRatioVariants';
import type { AspectRatioProps } from './AspectRatio.types';
import { twMerge } from 'tailwind-merge';
import defaultAspectRatioImage from './defaultAspectRatio.jpg';

export type Ratio = 'square' | 'video' | 'photo';
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio, className, children, defaultImage, ...props }, ref) => {
    const hasChildren = React.Children.count(children) > 0;
    const imageSrc = defaultImage ?? defaultAspectRatioImage;

    const ratioMap: Record<Ratio, number> = {
      square: 1 / 1,
      video: 16 / 9,
      photo: 4 / 3,
    };
    const numericRatio = ratioMap[ratio ?? 'video'];

    return (
      <div
        ref={ref}
        className={twMerge(
          'relative w-full min-w-[300px] overflow-hidden',
          // aspectRatioVariants({ ratio }),
          className
        )}
        style={{ aspectRatio: numericRatio }}
        {...props}
      >
        <div className="absolute top-0 left-0 h-full w-full">
          {hasChildren ? (
            children
          ) : (
            <img
              src={imageSrc}
              alt="Default Photo"
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    );
  }
);
AspectRatio.displayName = 'AspectRatio';
