import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectableChips from "../components/selectablechips/SelectableChips";

export default {
    title:'Example/select/SelectableChips',
    component:SelectableChips
} as ComponentMeta<typeof SelectableChips>

const Template :ComponentStory<typeof SelectableChips> = (args)=><SelectableChips {...args}/>


const listOfChips = [
    { text: 'Crédito', active: false },
    { text: 'Débito', active: false },
    { text: 'Efectivo', active: false },
    { text: 'Todo pago', active: false },
    { text: 'Otro', value: 'Privada', active: false },
];


export const  Column = Template.bind({});
Column.args ={
  options:listOfChips,
  direction:'column'
};