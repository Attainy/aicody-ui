import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogProps } from './Dialog';
import { commonArgTypes } from '../argTypes';

const meta: Meta<DialogProps> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: { open: { control: 'boolean' }, ...commonArgTypes },
};
export default meta;

export const Open: StoryObj<DialogProps> = {
  args: {
    open: true,
    kind: 'primary',
    size: 'md',
    children: <div>대화상자 내용</div>,
  },
};
export const Closed: StoryObj<DialogProps> = { args: { open: false } };
