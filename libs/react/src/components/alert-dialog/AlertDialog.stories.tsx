import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from './AlertDialog';
import type { AlertDialogProps } from './AlertDialog.types';

const meta: Meta<AlertDialogProps> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  args: {
    kind: 'primary',
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    triggerText: 'Show Dialog',
    cancelText: 'Cancel',
    confirmText: 'Continue',
  },
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'plain'],
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    triggerText: {
      control: { type: 'text' },
    },
    cancelText: {
      control: { type: 'text' },
    },
    confirmText: {
      control: { type: 'text' },
    },
    onConfirm: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { disable: true },
  },
};

export default meta;

export const Primary: StoryObj<AlertDialogProps> = {
  args: {
    kind: 'primary',
  },
};

export const Secondary: StoryObj<AlertDialogProps> = {
  args: {
    kind: 'secondary',
  },
};

export const Plain: StoryObj<AlertDialogProps> = {
  args: {
    kind: 'plain',
  },
};
