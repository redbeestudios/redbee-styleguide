import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '../components/checkBox/CheckBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// @ts-ignore
export default {
  title: 'Example/CheckBox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  children: 'Checkbox normal unchecked',
  id: 'uno',
  checked: true,
};
