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
  },
};
export default meta;

export const Square: StoryObj<AspectRatioProps> = {};
export const Video: StoryObj<AspectRatioProps> = { args: { ratio: 'video' } };
export const Photo: StoryObj<AspectRatioProps> = { args: { ratio: 'photo' } };
