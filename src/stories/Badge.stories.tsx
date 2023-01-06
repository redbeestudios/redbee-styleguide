import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "../components/badge/Badge";

export default {
  title: "Example/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const TextBadge = Template.bind({});
TextBadge.args = {
  variant: "info",
  children: "danger",
};

export const DotBadge = Template.bind({});
DotBadge.args = {
  variant: "info",
  children: "danger",
  type: "dot",
};

export const ImageBadge = Template.bind({});
ImageBadge.args = {
  variant: "info",
  children: "danger",
  iconName: "notification_add_outline",
};

export const NotifictionBadge = Template.bind({});
NotifictionBadge.args = {
  type: "notification",
  children: "55",
};
