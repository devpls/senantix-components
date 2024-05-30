import type { Meta, StoryObj } from "@storybook/react";

import { PieWidget } from "./pie-widget";

const meta = {
  title: "Components/PieWidget",
  component: PieWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    data: {
      control: "object",
    },
    width: {
      control: "number",
      description: "Width of the pie chart",
    },
    height: {
      control: "number",
      description: "Height of the pie chart",
    },
    pieProps: {
      control: "object",
      description: "Props to pass to the Pie component from recharts",
    },
    centerText: {
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PieWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        name: "left",
        value: 100,
        color: "var(--senantix-palette-primary-100)",
      },
      {
        name: "used",
        value: 400,
        color: "var(--senantix-palette-primary-light)",
      },
    ],
    centerText: "My text",
  },
};
