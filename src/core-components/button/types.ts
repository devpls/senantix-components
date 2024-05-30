import { ReactNode } from "react";

import { sizeVariants, variantVariants } from "./button.css.ts";

export type ButtonProps = {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label: string;
  onClick?: () => void;
  variant?: keyof typeof variantVariants;
  size?: keyof typeof sizeVariants;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};
