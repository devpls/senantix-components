import { GearIcon, PlusIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";

import { PieWidget } from "../pie-widget";

import { ChartWidget } from "./chart-widget";

const meta = {
  title: "Components/ChartWidget",
  component: ChartWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
    },

    headerIcon: {
      control: "object",
    },
    actions: {
      control: "object",
    },
    children: {
      control: "object",
    },
    contentTitle: {
      control: "text",
    },
    contentText: {
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChartWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "App Limits",
    headerIcon: <GearIcon display={"block"} />,
    actions: [
      {
        label: "Settings",
        icon: <GearIcon display={"block"} width={16} height={16} />,
        onClick: () => {
          console.log("Settings");
        },
      },
      {
        label: "Other Settings",
        icon: <PlusIcon display={"block"} width={16} height={16} />,
        onClick: () => {
          console.log("Other Settings");
        },
      },
    ],
    children: (
      <PieWidget
        centerText={"80%"}
        data={[
          { name: "Group A", value: 400, color: "#8884d8" },
          { name: "Group B", value: 300, color: "#82ca9d" },
        ]}
      />
    ),
    contentTitle: "Speedometer",
    contentText: (
      <>
        You have used 80% of your available spots. <br />
        Upgrade your plan to create more projects.
      </>
    ),
    footerActionButtons: [
      {
        label: "Upgrade plan",
        iconLeft: (
          <PlusIcon display={"block"} width={14} height={14} color={"#fff"} />
        ),
      },
    ],
  },
};
