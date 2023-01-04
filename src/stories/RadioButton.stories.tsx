import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from "../components/radiobutton/RadioButton";

export default {
    title:'Example/RadioButton',
    component:RadioButton

} as ComponentMeta<typeof RadioButton>;

const Template:ComponentStory<typeof RadioButton> =(args )=><RadioButton {...args}/>

export const SinBorde = Template.bind({});
SinBorde.args ={
  id:'radio1',
  name:'radioName',
  label:'Radio sin borde',
  value:'radio1',
  checked:true
};

export const ConBorde = Template.bind({});
ConBorde.args ={
    id:'radio1',
    name:'radioName',
    label:'Radio sin borde',
    value:'radio1',
    checked:true,
    border:true
};