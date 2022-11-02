import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonSize, ButtonColor } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, size, color }) => (
  <div style={{ padding: 50 }}>
    <Button size={size} color={color}>
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
Default.parameters = {
  viewMode: "docs",
};

export const Disabled: ComponentStory<typeof Button> = ({
  children,
  size,
  color,
}) => (
  <div style={{ padding: 50 }}>
    <Button size={size} color={color} disabled>
      {children}
    </Button>
  </div>
);
Disabled.args = {
  ...Default.args,
};
Default.parameters = {
  viewMode: "docs",
};
