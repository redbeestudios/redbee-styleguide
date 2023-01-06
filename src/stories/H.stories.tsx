import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import H from "../components/texts/h/H";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Texts/H",
  component: H,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof H>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H> = (args) => <H {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  font: "primary",
  type: "1",
  variant: "primary",
  weight: "regular",
  modifier: "regular",
  children: "Algo que mostrar",
};
