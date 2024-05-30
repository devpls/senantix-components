import { ReactNode } from "react";

import { Spacing } from "@app/types";

import { StackStyles } from "./styles";

export type StackProps = {
  children?: ReactNode;
  className?: string;
  gap?: Spacing | number;
} & StackStyles;
