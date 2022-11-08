import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select, SelectState } from "./select";

const selectOptions = [
  "Phoenix Baker",
  "Olivia Rhye",
  "Lana Steiner",
  "Demi Wilkinson",
  "Candice Wu",
  "Natali Craig",
  "Drew Cano",
];

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  icon,
  label,
  error,
  hint,
  state,
  options,
  ...selectProps
}) => (
  <div style={{ padding: 50 }}>
    <Select
      icon={icon}
      label={label}
      error={error}
      hint={hint}
      state={state}
      options={options}
      {...selectProps}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: "none",
  label: "Team Member",
  hint: "This is a hint to help the user.",
  state: SelectState.open,
  options: selectOptions,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: "This is an error message.",
};
