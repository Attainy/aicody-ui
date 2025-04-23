import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu, ContextMenuProps } from './ContextMenu';
import { commonArgTypes } from '../argTypes';

const meta: Meta<ContextMenuProps> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  argTypes: commonArgTypes,
};
export default meta;

export const Default: StoryObj<ContextMenuProps> = {
  args: {
    kind: 'primary',
    size: 'md',
    children: <div className="p-2">메뉴 항목</div>,
  },
};
