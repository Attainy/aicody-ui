import React from 'react';
import { profilePhotoVariants } from './ProfilePhotoVariants';
import type { ProfilePhotoProps } from './ProfilePhoto.types';
import defaultProfilePhoto from './defaultProfilePhoto.png';
import { twMerge } from 'tailwind-merge';

export const ProfilePhoto = React.forwardRef<HTMLDivElement, ProfilePhotoProps>(
  ({ size = 'md', className, ...imgProps }, ref) => {
    const srcToShow = imgProps.src ?? defaultProfilePhoto;

    return (
      <div
        ref={ref}
        className={twMerge(
          'relative inline-block overflow-hidden rounded-full bg-brand-gray',
          profilePhotoVariants({ size }),
          className
        )}
      >
        <img
          {...imgProps}
          src={srcToShow}
          alt={imgProps.alt ?? 'Profile photo'}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }
);

ProfilePhoto.displayName = 'ProfilePhoto';
