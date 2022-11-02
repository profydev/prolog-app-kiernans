import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonSize, ButtonColor, ButtonIcon } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  children,
  size,
  color,
  icon,
}) => (
  <div style={{ padding: 50 }}>
    <Button size={size} color={color} icon={icon}>
      {children}
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button CTA",
  size: ButtonSize.sm,
  color: ButtonColor.primary,
};

export const Disabled: ComponentStory<typeof Button> = ({
  children,
  size,
  color,
  icon,
}) => (
  <div style={{ padding: 50 }}>
    <Button size={size} color={color} icon={icon} disabled>
      {children}
    </Button>
  </div>
);
Disabled.args = {
  ...Default.args,
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  ...Default.args,
  icon: ButtonIcon.only,
  image: "/icons/alert-circle.svg",
};
