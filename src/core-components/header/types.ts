import { ReactNode } from "react";

import {
  alignVariant,
  fontWeightVariant,
  headerVariants,
} from "./header.css.ts";

export type HeaderProps = {
  variant?: keyof typeof headerVariants;
  children?: ReactNode;
  align?: keyof typeof alignVariant;
  weight?: keyof typeof fontWeightVariant;
};
