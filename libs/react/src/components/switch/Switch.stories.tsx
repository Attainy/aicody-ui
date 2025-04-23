import type { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchProps } from './Switch';
import { commonArgTypes } from '../argTypes';

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
    ...commonArgTypes,
  },
};
export default meta;

type Story = StoryObj<SwitchProps>;

export const Off: Story = {
  args: {
    kind: 'primary',
    size: 'md',
    checked: false,
  },
};

export const On: Story = {
  args: {
    kind: 'primary',
    size: 'md',
    checked: true,
  },
};
