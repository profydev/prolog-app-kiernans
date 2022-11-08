import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox, CheckboxSize } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ checkboxSize, label }) => (
  <div style={{ padding: 50 }}>
    <Checkbox checkboxSize={checkboxSize} label={label} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  checkboxSize: CheckboxSize.md,
  label: "Label",
};
