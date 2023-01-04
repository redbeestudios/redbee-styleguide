import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MultiSelectableButton from "../components/multiselectablebutton/MultiSelectableButton";


export default {
    title:'Example/MultiSelect/MultiSelectableButton',
    component:MultiSelectableButton

} as ComponentMeta<typeof MultiSelectableButton>

const Template :ComponentStory<typeof MultiSelectableButton>=(args)=><MultiSelectableButton {...args}/>

const options = [
    {
        ...MultiSelectableButton.OPTION_ALL,
    },
    {
        value: 'visa',
        label: 'Visa',
    },
    {
        value: 'mastercard',
        label: 'Mastercard',
    },
    {
        value: 'amex',
        label: 'Amex',
    },
    {
        value: 'visa2',
        label: 'Visa 2',
    },
    {
        value: 'visa3',
        label: 'Visa 3',
    },
    {
        value: 'visa4',
        label: 'Visa 4',
    },
];



export const Normal = Template.bind({});
Normal.args ={
    name:'name',
    options:options,

};