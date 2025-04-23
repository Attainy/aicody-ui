// aicody-ui/libs/react/src/components/accordion/Accordion.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    title: 'Click me!',
    children: 'Accordion content goes here.',
  },
  argTypes: {
    defaultOpen: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    defaultOpen: false,
  },
};

export const OpenByDefault: Story = {
  args: {
    defaultOpen: true,
  },
};
