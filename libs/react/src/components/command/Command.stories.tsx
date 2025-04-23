import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Command, CommandProps } from './Command';
import { commonArgTypes } from '../argTypes';

const meta: Meta<CommandProps> = {
  title: 'Components/Command',
  component: Command,
  argTypes: commonArgTypes,
};
export default meta;

export const Default: StoryObj<CommandProps> = {
  args: { kind: 'primary', size: 'md', children: <div>명령어 아이템</div> },
};
