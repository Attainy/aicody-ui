import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';
import type { AspectRatioProps } from './AspectRatio.types';

const meta: Meta<AspectRatioProps> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  args: {
    ratio: 'video',
  },
  argTypes: {
    ratio: {
      control: { type: 'select' },
      options: ['square', 'video', 'photo'],
    },
    defaultImage: { control: 'text' },
  },
};
export default meta;

export const Square: StoryObj<AspectRatioProps> = {
  args: {},
};
export const Video: StoryObj<AspectRatioProps> = {
  args: { ratio: 'video' },
};
export const Photo: StoryObj<AspectRatioProps> = {
  args: { ratio: 'photo' },
};
export const WithChildren: StoryObj<AspectRatioProps> = {
  args: {
    children: (
      <div className="flex items-center justify-center h-full">Content</div>
    ),
  },
};
export const WithoutChildren: StoryObj<AspectRatioProps> = {
  args: {},
};
