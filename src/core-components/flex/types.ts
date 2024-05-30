import { ReactNode } from "react";

import { Spacing } from "@app/types";

export type FlexProps = {
  children?: ReactNode;
  gap?: Spacing | number;
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  className?: string;
};
