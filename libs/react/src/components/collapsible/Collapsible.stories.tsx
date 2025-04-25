import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from './Collapsible';
import type { CollapsibleProps } from './Collapsible.types';

const meta: Meta<CollapsibleProps> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  args: {
    triggerText: 'Toggle Content',
    children:
      'This is the collapsible content. Click the trigger to toggle visibility.',
    kind: 'primary',
    defaultOpen: false,
  },
  argTypes: {
    kind: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'plain'],
    },
    triggerText: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
    defaultOpen: {
      control: { type: 'boolean' },
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

export const Plain: StoryObj<CollapsibleProps> = {
  args: {
    kind: 'plain',
  },
};

export const DefaultOpen: StoryObj<CollapsibleProps> = {
  args: {
    defaultOpen: true,
  },
};

export const MultipleCollapsible: StoryObj<CollapsibleProps> = {
  render: () => (
    <div className="space-y-4">
      <Collapsible triggerText="Section 1" kind="plain" defaultOpen={true}>
        Content for Section 1
      </Collapsible>
      <Collapsible triggerText="Section 2" kind="plain" defaultOpen={false}>
        Content for Section 2
      </Collapsible>
      <Collapsible triggerText="Section 3" kind="plain" defaultOpen={false}>
        Content for Section 3
      </Collapsible>
    </div>
  ),
};
