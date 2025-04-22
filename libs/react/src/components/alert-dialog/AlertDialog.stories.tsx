// aicody-ui/libs/react/src/components/alert-dialog/AlertDialog.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  args: {
    children: '이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?',
    variant: 'default',
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {};
export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};
export const Large: Story = {
  args: {
    size: 'lg',
  },
};
