import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { commonArgTypes } from '../argTypes';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: commonArgTypes,
};
export default meta;

type Story = StoryObj<ButtonProps>;
export const Primary: Story = {
  args: { kind: 'primary', size: 'md', children: '버튼' },
};
export const Secondary: Story = {
  args: { kind: 'secondary', size: 'md', children: '버튼' },
};
export const Outline: Story = {
  args: { kind: 'outline', size: 'md', children: '버튼' },
};
export const Plain: Story = {
  args: { kind: 'plain', size: 'md', children: '버튼' },
};
