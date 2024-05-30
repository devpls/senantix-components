import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";

const meta = {
  title: "Core/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    type: { control: "radio", options: ["button", "submit", "reset"] },
    variant: { control: "radio", options: ["primary", "secondary"] },
  },
  args: { onClick: fn(), iconLeft: null, iconRight: null },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Button",
    size: "medium",
    type: "button",
    variant: "primary",
    iconLeft: <ArrowLeftIcon display={"block"} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Button",
    size: "medium",
    type: "button",
    variant: "primary",
    iconRight: <ArrowRightIcon display={"block"} />,
  },
};
