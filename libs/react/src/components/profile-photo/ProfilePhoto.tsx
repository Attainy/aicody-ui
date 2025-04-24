// src/components/Avatar/ProfilePhoto.tsx
import React from 'react';
import { mergeClass } from '../../utils/mergeClass';
import { profilePhotoVariants } from './ProfilePhotoVariants';
import type { ProfilePhotoProps } from './profilePhoto.types';
import defaultProfilePhoto from './profilePhoto.png';

export const ProfilePhoto = React.forwardRef<HTMLDivElement, ProfilePhotoProps>(
  ({ size = 'md', className, ...imgProps }, ref) => {
    const classes = profilePhotoVariants({ size });
    const srcToShow = imgProps.src ?? defaultProfilePhoto;

    return (
      <div ref={ref} className={mergeClass(classes, className)}>
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
