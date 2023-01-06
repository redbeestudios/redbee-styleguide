import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextArea from "../components/textarea/TextArea";

export default {
  title: "Example/inputs/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const FullIcon = Template.bind({});

FullIcon.args = {
  id: "testTA0",
  label: "Label",
  placeHolder: "TextArea with icon + defaul + required",
  message: "Help message",
  icon: "help_outline",
  required: true,
};
