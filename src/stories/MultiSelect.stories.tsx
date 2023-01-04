import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';


import MultiSelect from '../components/multiselect/MultiSelect';

export default {
    title:'Example/MultiSelect/MultiSelect',
    component:MultiSelect
} as ComponentMeta<typeof MultiSelect>

const Template:ComponentStory<typeof MultiSelect>=(args )=><MultiSelect {...args}/>

const options = [
    {
        ...MultiSelect.OPTION_ALL,
    },
    {
        value: 'visa',
        label: 'Visa',
        isDisabled: true,
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


Normal.args={
    showEmptyButton:true,
    placeHolder:'seleccione...',
    noOptionsMessage: 'No Existen mas Opciones',
    options:options,
    closeMenuOnSelect:false,
    color:'white',
    label:'Un Label',
    message:'Helper text',
    onChange:(response) => console.log('response: ', response),
    showResetButton:true,
    defaultValue:[
        {
            label: 'Visa 3',
            value: 'visa3',
        },
        ]
}