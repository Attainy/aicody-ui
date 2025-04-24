import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from './Collapsible';
import type { CollapsibleProps } from './Collapsible.types';

const meta: Meta<CollapsibleProps> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  args: {
    kind: 'primary',
    triggerText: 'Toggle Content',
    children:
      'This is the collapsible content. You can toggle it by clicking the trigger button.',
  },
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'plain'],
    },
    triggerText: {
      control: { type: 'text' },
    },
    children: {
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

export const Primary: StoryObj<CollapsibleProps> = {
  args: {
    kind: 'primary',
  },
};

export const Secondary: StoryObj<CollapsibleProps> = {
  args: {
    kind: 'secondary',
  },
};

export const Outline: StoryObj<CollapsibleProps> = {
  args: {
    kind: 'outline',
  },
};

export const Plain: StoryObj<CollapsibleProps> = {
  args: {
    kind: 'plain',
  },
};
