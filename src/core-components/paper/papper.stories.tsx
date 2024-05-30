import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../text";

import { Paper } from "./paper";

const meta = {
  title: "Core/Paper",
  component: (props) => {
    return (
      <Paper {...props}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eleifend dui in porttitor efficitur. Aenean nulla nulla, aliquam eget
          ullamcorper non, tempor et nulla. Curabitur facilisis vel urna et
          maximus. Sed feugiat sollicitudin arcu et tempus. Praesent convallis
          orci sed lorem convallis lacinia. Vestibulum commodo ligula non risus
          molestie commodo. Ut sem diam, blandit vel arcu eget, mollis aliquet
          diam. Duis non hendrerit nisl.
        </Text>
      </Paper>
    );
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    shadow: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
    },
    radius: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
    },
    spacing: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
    },
  },
  tags: ["autodocs"], // Add tags here
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shadow: "md",
    radius: "md",
    spacing: "md",
  },
};
