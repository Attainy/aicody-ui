import type { Meta, StoryObj } from '@storybook/react';
import { Command } from './Command';
import type { CommandProps } from './Command.types';

const meta: Meta<CommandProps> = {
  title: 'Components/Command',
  component: Command,
  args: {
    suggestions: [
      {
        id: '1',
        label: 'Open Dashboard',
        action: () => alert('Opening Dashboard'),
      },
      {
        id: '2',
        label: 'Search Users',
        action: () => alert('Searching Users'),
      },
      { id: '3', label: 'Settings', action: () => alert('Opening Settings') },
      { id: '4', label: 'Logout', action: () => alert('Logging out') },
    ],
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

export const Default: StoryObj<CommandProps> = {
  args: {},
};

export const Empty: StoryObj<CommandProps> = {
  args: {
    suggestions: [],
  },
};
