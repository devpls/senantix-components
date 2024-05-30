import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "./stack";

const meta = {
  title: "Core/Stack",
  component: (props) => {
    return (
      <div
        style={{
          minWidth: "400px",
          minHeight: "400px",
          backgroundColor: "lightsalmon",
        }}
      >
        <Stack {...props}>
          {[...Array(3).keys()].map(() => {
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
        </Stack>
      </div>
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
    alignItems: {
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch"],
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
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alignItems: "stretch",
    justifyContent: "center",
  },
};
