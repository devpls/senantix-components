import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./flex";

const meta = {
  title: "Core/Flex",
  component: (props) => {
    return (
      <Flex {...props}>
        {[...Array(4).keys()].map(() => {
          return (
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "lightblue",
              }}
            ></div>
          );
        })}
      </Flex>
    );
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    gap: {
      type: { name: "string", required: false },
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description:
        "The gap between children, can be a number or predefined size",
    },
    justifyContent: {
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    alignItems: {
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch"],
    },
    flexWrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    flexDirection: { control: "select", options: ["row", "column"] },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: "md",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "nowrap",
    flexDirection: "row",
  },
};
