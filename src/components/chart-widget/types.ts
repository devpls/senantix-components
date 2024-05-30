import { ReactNode } from "react";

import type { ActionMenuProps } from "@app/components/action-menu/type.ts";
import type { ButtonProps } from "@app/core-components";

export type ChartWidgetProps = {
  title: string;
  headerIcon?: ReactNode;
  actions?: ActionMenuProps["actions"];
  children?: ReactNode;
  contentTitle?: string;
  contentText?: ReactNode;
  className?: string;
  footerActionButtons?: ButtonProps[];
};
