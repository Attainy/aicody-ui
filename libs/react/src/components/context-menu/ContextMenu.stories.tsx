import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from './ContextMenu';
import type { ContextMenuProps } from './Contextmenu.types';

const meta: Meta<ContextMenuProps> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  args: {
    triggerText: 'Right-click here',
  },
  argTypes: {
    triggerText: {
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

export const Default: StoryObj<ContextMenuProps> = {
  args: {},
};
