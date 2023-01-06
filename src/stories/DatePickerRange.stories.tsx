import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DatePickerRange from "../components/datepicker/DatePickerRange";

export default {
  title: "Example/DatePicker/DatePickerRange",
  component: DatePickerRange,
} as ComponentMeta<typeof DatePickerRange>;

const Template: ComponentStory<typeof DatePickerRange> = (args) => (
  <DatePickerRange {...args} />
);

export const Daily = Template.bind({});
Daily.args = {
  maxDate: new Date(),
  label: "Daily",
  monthsShown: 2,
};
