import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  placeholder,
  icon,
  label,
  error,
  hint,
}) => (
  <div style={{ padding: 50 }}>
    <Input
      placeholder={placeholder}
      icon={icon}
      label={label}
      error={error}
      hint={hint}
    />
  </div>
);

const DisabledTemplate: ComponentStory<typeof Input> = ({
  placeholder,
  icon,
  label,
  error,
  hint,
}) => (
  <div style={{ padding: 50 }}>
    <Input
      placeholder={placeholder}
      icon={icon}
      label={label}
      error={error}
      hint={hint}
      disabled
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "random@gmail.com",
  icon: "/icons/input-icon.svg",
  label: "Email",
  hint: "This is a hint to help the user.",
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Default.args,
  label: "",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...Default.args,
  icon: "",
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: "This is an error message.",
};

export const ErrorNoIcon = Template.bind({});
ErrorNoIcon.args = {
  ...Default.args,
  error: "This is an error message.",
  icon: "",
};

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  ...Default.args,
};

export const DisabledError = DisabledTemplate.bind({});
DisabledError.args = {
  ...Default.args,
  error: "This is an error message.",
};
