import React from 'react';
import { mergeClass } from '../../utils/mergeClass';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
const avatarSizes = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10',
  lg: 'h-14 w-14 text-lg',
};
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ fallback, size = 'md', className, ...imgProps }, ref) => (
    <div
      ref={ref}
      className={mergeClass(
        `relative inline-block overflow-hidden rounded-full bg-brand-gray`,
        avatarSizes[size],
        className
      )}
    >
      {imgProps.src ? (
        <img {...imgProps} className="h-full w-full object-cover" />
      ) : (
        <span className="flex h-full w-full items-center justify-center">
          {fallback}
        </span>
      )}
    </div>
  )
);
Avatar.displayName = 'Avatar';
