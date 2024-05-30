import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./header";

const meta = {
  title: "Core/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    weight: {
      control: "select",
      options: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Header Text",
  },
};
