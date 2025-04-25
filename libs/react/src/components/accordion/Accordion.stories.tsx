import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import type { AccordionProps } from './Accordion.types';

const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    kind: 'primary',
    triggerText: 'Toggle Content',
    children:
      'This is the accordion content. You can toggle it by clicking the trigger button.',
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

export const Outline: StoryObj<AccordionProps> = {
  args: {
    kind: 'outline',
  },
};

export const Plain: StoryObj<AccordionProps> = {
  args: {
    kind: 'plain',
  },
};
