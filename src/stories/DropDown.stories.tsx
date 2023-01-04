import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropDown from "../components/dropdown/DropDown";

export default {
    title:'Example/select/DropDown',
    component:DropDown
} as ComponentMeta<typeof DropDown>

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;
const ICE_CREAM_FLAVOURS = [
    {
        title: 'Chocolate',
        action: () => console.log('Hello I am a Chocolate ice cream'),
    },
    {
        title: 'Disabled Strawberry',
        disabled: true,
        action: () => console.log('Hello I am a Strawberry ice cream'),
    },
    {
        title: 'Vanilla',
        action: () => console.log('Hello I am a Vanilla ice cream'),
    },
];

export const Default = Template.bind({});

Default.args ={
    title:'Choose Your Ice Cream Flavour',
    items:ICE_CREAM_FLAVOURS,
    size:'md'
};


