import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleProps } from './Collapsible';
import { commonArgTypes } from '../argTypes';

const meta: Meta<CollapsibleProps> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  argTypes: commonArgTypes,
};
export default meta;

type Story = StoryObj<CollapsibleProps>;
export const Default: Story = {
  args: {
    kind: 'primary',
    size: 'md',
    children: (
      <>
        <summary>접기/펼치기</summary>
        <div>숨겨진 내용</div>
      </>
    ),
  },
};
