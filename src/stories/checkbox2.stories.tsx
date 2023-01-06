import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../components/input/Input";
import Checkbox from "../components/checkBox/CheckBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// @ts-ignore
export default {
  title: "Example/CheckBox2",
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "prueba primary",
  isSelectAllCheck: true,
};
