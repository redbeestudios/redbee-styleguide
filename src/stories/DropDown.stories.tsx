import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropDown from '../components/dropdown/DropDown';

export default {
  title: 'Example/select/DropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);
const ICE_CREAM_FLAVOURS = [
  {
    title: 'Chocolate',
    action: () => {},
  },
  {
    title: 'Disabled Strawberry',
    disabled: true,
    action: () => {},
  },
  {
    title: 'Vanilla',
    action: () => {},
  },
];

export const Default = Template.bind({});

Default.args = {
  title: 'Choose Your Ice Cream Flavour',
  items: ICE_CREAM_FLAVOURS,
  size: 'md',
};
