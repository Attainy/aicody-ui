import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import type { DialogProps } from './Dialog.types';

const meta: Meta<DialogProps> = {
  title: 'Components/Dialog',
  component: Dialog,
  args: {
    triggerText: 'Edit profile',
    title: 'Edit profile',
    description:
      "Make changes to your profile here. Click save when you're done.",
    initialName: 'Pedro Duarte',
    initialUsername: '@peduarte',
    cancelButtonText: 'Cancel',
    saveButtonText: 'Save changes',
    kind: 'primary',
  },
  argTypes: {
    triggerText: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    initialName: { control: { type: 'text' } },
    initialUsername: { control: { type: 'text' } },
    initialEmail: { control: { type: 'text' } },
    cancelButtonText: { control: { type: 'text' } },
    saveButtonText: { control: { type: 'text' } },
    kind: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'outline', 'plain', 'cancel'],
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

export const Primary: StoryObj<DialogProps> = {
  args: {
    kind: 'primary',
  },
};

export const Secondary: StoryObj<DialogProps> = {
  args: {
    kind: 'secondary',
  },
};

export const Outline: StoryObj<DialogProps> = {
  args: {
    kind: 'outline',
  },
};

export const Plain: StoryObj<DialogProps> = {
  args: {
    kind: 'plain',
  },
};

export const WithEmail: StoryObj<DialogProps> = {
  args: {
    description: 'Make changes to your profile.',
    initialName: 'Freja Johnsen',
    initialUsername: undefined,
    initialEmail: 'freja@example.com',
    saveButtonText: 'Save',
    kind: 'primary',
  },
};
