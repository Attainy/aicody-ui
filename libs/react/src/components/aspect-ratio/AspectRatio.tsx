import React from 'react';
import { mergeClass } from '../../utils/mergeClass';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number; // width / height
}
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 16 / 9, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={mergeClass('relative w-full overflow-hidden', className)}
      style={{ paddingBottom: `${100 / ratio}%` }}
      {...props}
    >
      <div className="absolute inset-0 h-full w-full">{children}</div>
    </div>
  )
);
AspectRatio.displayName = 'AspectRatio';
