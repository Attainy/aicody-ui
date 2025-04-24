import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type { ButtonProps } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    kind: 'primary',
    size: 'md',
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
    children: { control: 'text' },
  },
};
export default meta;

// Playground 스토리는 삭제!
// 네 개 스토리 모두 args를 상속받아 kind/size를 변경 가능
export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: { kind: 'secondary' },
};

export const Outline: StoryObj<ButtonProps> = {
  args: { kind: 'outline' },
};

export const Plain: StoryObj<ButtonProps> = {
  args: { kind: 'plain' },
};
