import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from '../components/logo/Logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// @ts-ignore
export default {
  title: 'Example/Logo',
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Horizontal.args = {
  size: 'medium',
  type: 'horizontal',
  cursor: 'default',
};
