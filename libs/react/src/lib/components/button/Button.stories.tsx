import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    text: '',
    padding: 0,
    disabled: false,
  },
};

export const Heading: Story = {
  args: {
    text: '',
    padding: 0,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  },
};
