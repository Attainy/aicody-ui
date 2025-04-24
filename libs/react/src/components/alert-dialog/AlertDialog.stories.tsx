import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from './AlertDialog';
import type { AlertDialogProps } from './AlertDialog.types';

const meta: Meta<AlertDialogProps> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  args: {
    kind: 'primary',
    size: 'md',
    title: 'Confirm Your Action',
    description:
      'Are you sure you want to proceed? This action cannot be undone.',
    triggerText: 'Show Dialog',
    cancelText: 'Cancel',
    confirmText: 'Continue',
  },
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'plain'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
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

export const Outline: StoryObj<AlertDialogProps> = {
  args: {
    kind: 'outline',
  },
};

export const Plain: StoryObj<AlertDialogProps> = {
  args: {
    kind: 'plain',
  },
};
