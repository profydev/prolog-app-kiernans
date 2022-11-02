import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonSize, ButtonColor } from "./button";
import { userEvent, waitFor, within } from "@storybook/testing-library";

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

export const Focused = Template.bind({});
Focused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await canvas.getByRole("button").focus();
};
Default.args = {
  children: "Button CTA",
  size: ButtonSize.sm,
  color: ButtonColor.primary,
};
Default.parameters = {
  viewMode: "docs",
};
