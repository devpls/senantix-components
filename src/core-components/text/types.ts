import { ReactNode } from "react";

import { alignVariant, textSizeVariant } from "./text.css.ts";

export type TextProps = {
  size?: keyof typeof textSizeVariant;
  color?: string;
  span?: boolean;
  children?: ReactNode;
  align?: keyof typeof alignVariant;
};
