import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./select";

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
  placeholder,
  icon,
  label,
  error,
  hint,
  options,
  ...selectProps
}) => (
  <div style={{ padding: 50 }}>
    <Select
      placeholder={placeholder}
      icon={icon}
      label={label}
      error={error}
      hint={hint}
      options={options}
      {...selectProps}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select a team member...",
  icon: "/icons/select-icon.svg",
  label: "Team Member",
  hint: "This is a hint to help the user.",
  options: selectOptions,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: "This is an error message.",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...Default.args,
  icon: "",
};
