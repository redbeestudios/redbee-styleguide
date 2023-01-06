import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "../components/chip/Chip";

export default {
  title: "Example/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Label",
  value: "value",
  iconLeft: "done_outline",
  closeButton: true,
};

export const Active = Template.bind({});

Active.args = {
  text: "Label",
  value: "value",
  iconLeft: "done_outline",
  closeButton: true,
  active: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  text: "Label",
  value: "value",
  iconLeft: "done_outline",
  closeButton: true,
  disabled: true,
};
