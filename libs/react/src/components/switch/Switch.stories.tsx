import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import type { SwitchProps } from './Switch.types';

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
  args: {
    size: 'md',
    kind: 'primary',
  },
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'plain'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    checked: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
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

export const Primary: StoryObj<SwitchProps> = {
  args: {
    kind: 'primary',
    label: 'Primary Switch',
  },
};

export const Secondary: StoryObj<SwitchProps> = {
  args: {
    kind: 'secondary',
    label: 'Secondary Switch',
  },
};

export const Plain: StoryObj<SwitchProps> = {
  args: {
    kind: 'plain',
    label: 'Plain Switch',
  },
};
