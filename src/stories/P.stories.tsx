import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import P from '../components/texts/p/P';

export default {
  title: 'Example/Texts/P',
  component: P,
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const Example = Template.bind({});

Example.args = {
  children: 'Esto es un ejemplo,',
};
