import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import type { AccordionProps } from './Accordion.types';

const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    kind: 'primary',
    items: [
      {
        id: 'section-1',
        triggerText: 'Section 1',
        content:
          'Content for Section 1. Click the trigger to toggle visibility.',
      },
      {
        id: 'section-2',
        triggerText: 'Section 2',
        content:
          'Content for Section 2. Click the trigger to toggle visibility.',
      },
      {
        id: 'section-3',
        triggerText: 'Section 3',
        content:
          'Content for Section 3. Click the trigger to toggle visibility.',
      },
    ],
    defaultValue: 'section-1',
  },
  argTypes: {
    kind: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'plain'],
    },
    items: {
      control: { type: 'object' },
    },
    defaultValue: {
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

export const Primary: StoryObj<AccordionProps> = {
  args: {
    kind: 'primary',
  },
};

export const Secondary: StoryObj<AccordionProps> = {
  args: {
    kind: 'secondary',
  },
};

export const Plain: StoryObj<AccordionProps> = {
  args: {
    kind: 'plain',
  },
};
