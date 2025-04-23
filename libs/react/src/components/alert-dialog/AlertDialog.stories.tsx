import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog, AlertDialogProps } from './AlertDialog';
import { commonArgTypes } from '../argTypes';

const meta: Meta<AlertDialogProps> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  argTypes: commonArgTypes,
};
export default meta;

export const PrimaryAlert: StoryObj<AlertDialogProps> = {
  args: { kind: 'primary', size: 'md', children: '경고 메시지 예시입니다.' },
};
