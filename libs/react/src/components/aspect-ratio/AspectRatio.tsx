import React from 'react';
import { aspectRatioVariants } from './AspectRatioVariants';
import type { AspectRatioProps } from './AspectRatio.types';
import { twMerge } from 'tailwind-merge';
import defaultAspectRatioImage from './defaultAspectRatio.jpg';

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio, className, children, defaultImage, ...props }, ref) => {
    const hasChildren = React.Children.count(children) > 0;
    const imageSrc = defaultImage ?? defaultAspectRatioImage;

    return (
      <div
        ref={ref}
        className={twMerge(
          'relative w-full overflow-hidden',
          // aspectRatioVariants({ ratio }),
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 h-full w-full">
          {hasChildren ? (
            children
          ) : (
            <img
              src={imageSrc}
              alt="Aspect Ratio Default"
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    );
  }
);
AspectRatio.displayName = 'AspectRatio';
