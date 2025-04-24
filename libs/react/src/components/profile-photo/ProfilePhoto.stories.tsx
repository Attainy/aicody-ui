import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePhoto } from './ProfilePhoto';
import type { ProfilePhotoProps } from './ProfilePhoto.types';

const meta: Meta<ProfilePhotoProps> = {
  title: 'Components/ProfilePhoto',
  component: ProfilePhoto,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
  },
};
export default meta;

export const Image: StoryObj<ProfilePhotoProps> = {
  args: {
    src: 'https://cdn.pixabay.com/photo/2023/03/31/05/52/avatar-7889246_1280.jpg',
    alt: 'Profile photo',
  },
};

export const Default: StoryObj<ProfilePhotoProps> = {
  args: {},
};
