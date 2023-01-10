import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../components/card/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// @ts-ignore
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}> Hola</Card>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  spacing: '0',
  variant: 'neutral',
};
