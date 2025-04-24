import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox.types';

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    kind: 'primary',
    size: 'md',
    label: 'Check me',
  },
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'plain'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    label: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {
  args: { kind: 'primary' },
};

export const Secondary: Story = {
  args: { kind: 'secondary' },
};

export const Plain: Story = {
  args: { kind: 'plain' },
};
