import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import type { SwitchProps } from './Switch.types';

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
  args: {
    size: 'md',
    kind: 'primary',
    label: 'Toggle Switch',
  },
  argTypes: {
    kind: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'plain'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
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

export const Small: StoryObj<SwitchProps> = {
  args: {
    size: 'sm',
    label: 'Small Switch',
  },
};

export const Medium: StoryObj<SwitchProps> = {
  args: {
    size: 'md',
    label: 'Medium Switch',
  },
};

export const Large: StoryObj<SwitchProps> = {
  args: {
    size: 'lg',
    label: 'Large Switch',
  },
};

export const Checked: StoryObj<SwitchProps> = {
  args: {
    checked: true,
    label: 'Checked Switch',
  },
};

export const Disabled: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
    label: 'Disabled Switch',
  },
};

export const DisabledChecked: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
    checked: true,
    label: 'Disabled & Checked Switch',
  },
};
