import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox, CheckboxSize, CheckboxState } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({
  children,
  size,
  state,
  label,
}) => (
  <div style={{ padding: 50 }}>
    <Checkbox size={size} state={state} label={label}>
      {children}
    </Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.md,
  state: CheckboxState.checked,
  label: "Testing2",
};
