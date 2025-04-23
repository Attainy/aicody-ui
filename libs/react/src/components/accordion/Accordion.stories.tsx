import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';
import { commonArgTypes } from '../../../.storybook/argTypes';

const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: commonArgTypes,
};
export default meta;

export const Default: StoryObj<AccordionProps> = {
  args: {
    kind: 'primary',
    size: 'md',
    children: (
      <>
        <summary>아코디언 제목</summary>
        <div>아코디언 내용</div>
      </>
    ),
  },
};
