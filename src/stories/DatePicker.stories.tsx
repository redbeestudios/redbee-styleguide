import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DatePicker from "../components/datepicker/DatePicker";


export default {
    title:'Example/DatePicker/DatePicker',
    component:DatePicker

} as ComponentMeta<typeof DatePicker>

const Template:ComponentStory<typeof DatePicker> =(args)=><DatePicker {...args}/>

export const Daily = Template.bind({});
Daily.args ={
  maxDate:new Date(),
  label:'Daily'
};
