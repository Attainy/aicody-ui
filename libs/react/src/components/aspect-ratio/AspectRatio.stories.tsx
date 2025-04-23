import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const meta: Meta<AspectRatioProps> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  argTypes: { ratio: { control: 'number' } },
};
export default meta;

export const DefaultRatio: StoryObj<AspectRatioProps> = {
  args: {
    ratio: 16 / 9,
    children: <div className="bg-primary-main w-full h-full" />,
  },
};
