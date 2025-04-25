import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';
import type { AspectRatioProps } from './AspectRatio.types';
import defaultAspectRatioImage from './defaultAspectRatio.jpg';

const meta: Meta<AspectRatioProps> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  decorators: [
    (Story) => (
      <div style={{ width: 300, border: '1px solid #ddd' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    ratio: 'video',
    defaultImage: defaultAspectRatioImage,
  },
  argTypes: {
    ratio: {
      control: { type: 'select' },
      options: ['square', 'video', 'photo'],
    },
    defaultImage: { control: { type: 'file' } },
    children: { control: { type: 'text' } },
  },
};

export default meta;

export const Square: StoryObj<AspectRatioProps> = {
  args: {
    ratio: 'square', // 명시적 설정 추가
  },
};

export const Video: StoryObj<AspectRatioProps> = {
  args: {
    ratio: 'video',
  },
};

export const Photo: StoryObj<AspectRatioProps> = {
  args: {
    ratio: 'photo',
  },
};

export const WithoutChildren: StoryObj<AspectRatioProps> = {};
