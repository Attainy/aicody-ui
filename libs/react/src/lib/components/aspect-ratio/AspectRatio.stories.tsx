// aicody-ui/libs/react/src/components/aspect-ratio/AspectRatio.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  args: {
    ratio: 'video',
    children: (
      <img
        alt="Example"
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        className="object-cover w-full h-full"
      />
    ),
  },
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {};
export const Square: Story = {
  args: {
    ratio: 'square',
  },
};
export const Photo: Story = {
  args: {
    ratio: 'photo',
  },
};
