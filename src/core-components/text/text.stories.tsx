import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta = {
  title: "Core/Text",
  component: ({ children, ...rest }) => (
    <div style={{ minWidth: "200px" }}>
      <Text {...rest}>{children}</Text>
    </div>
  ),
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: "color",
    },
    span: {
      control: "boolean",
      type: "boolean",
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text Component",
    size: "md",
    color: "#000000",
    span: false,
    align: "left",
  },
};
