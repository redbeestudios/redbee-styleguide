import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Input  from '../components/input/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// @ts-ignore
export default {
  title: 'Example/inputs/Input',
  component: Input
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label:'prueba primary',
  type:'text',
  size:'md',
  inputStatus:'normal',
  icons:{  iconRight: 'view_outline'}

};


