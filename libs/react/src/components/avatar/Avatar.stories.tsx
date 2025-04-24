import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';

const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;

export const Image: StoryObj<AvatarProps> = {
  args: {
    size: 'md',
    src: 'https://cdn.pixabay.com/photo/2023/03/31/05/52/avatar-7889246_1280.jpg',
    alt: '아바타',
  },
};
export const Fallback: StoryObj<AvatarProps> = {
  args: { size: 'md', fallback: 'AB' },
};
