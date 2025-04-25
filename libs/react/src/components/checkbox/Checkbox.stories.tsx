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
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'outline', 'plain'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: { type: 'inline-radio' },
      options: ['rounded', 'square'],
    },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    kind: 'primary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Secondary: StoryObj<CheckboxProps> = {
  args: {
    kind: 'secondary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Outline: StoryObj<CheckboxProps> = {
  args: {
    kind: 'outline',
    size: 'md',
    shape: 'rounded',
  },
};

export const Plain: StoryObj<CheckboxProps> = {
  args: {
    kind: 'plain',
    size: 'md',
    shape: 'rounded',
  },
};

export const Checked: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
    size: 'md',
    shape: 'rounded',
  },
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
    size: 'md',
    shape: 'rounded',
  },
};

export const DisabledChecked: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
    checked: true,
    size: 'md',
    shape: 'rounded',
  },
};
