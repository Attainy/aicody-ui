// aicody-ui/libs/react/src/components/avatar/Avatar.tsx
import React from 'react';
import { avatarVariants } from './Avatar.tailwind';
import { Composer } from '../composer/Composer';
import { twMerge } from 'tailwind-merge';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default';
  className?: string;
}

const DEFAULT_IMAGE =
  'https://cdn.pixabay.com/photo/2024/08/01/20/34/ai-generated-8938184_1280.jpg';

const AvatarBase = (props: AvatarProps, ref: React.Ref<HTMLImageElement>) => {
  const { src, alt, size, variant, className, ...rest } = props;

  const baseClassName = avatarVariants({ size, variant });
  const mergedClassName = twMerge(baseClassName, className);

  return (
    <img
      src={src || DEFAULT_IMAGE}
      alt={alt}
      ref={ref}
      className={mergedClassName}
      {...rest}
    />
  );
};

export const Avatar = Composer(AvatarBase);
Avatar.displayName = 'Avatar';
