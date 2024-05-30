import type { Meta, StoryObj } from "@storybook/react";

import { ActionMenu } from "./action-menu";

const meta = {
  title: "Components/ActionMenu",
  component: ActionMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    actions: {
      control: "object",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: [
      {
        label: "Action 1",
        icon: "🔧",
        onClick: () => console.log("Action 1 clicked"),
      },
      {
        label: "Action 2",
        icon: "🔨",
        onClick: () => console.log("Action 2 clicked"),
      },
    ],
  },
};
