import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { commonArgTypes } from '../argTypes';

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: commonArgTypes,
};
export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    kind: 'primary',
    size: 'md',
    label: '체크박스 라벨',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    kind: 'primary',
    size: 'md',
    label: '체크된 상태',
    checked: true,
  },
};
