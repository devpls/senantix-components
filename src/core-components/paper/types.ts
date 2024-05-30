import { ReactNode } from "react";

import { Radius, Shadow, Spacing } from "@app/types";

export type PaperProps = {
  children?: ReactNode;
  shadow?: Shadow;
  radius?: Radius;
  spacing?: Spacing;
  gap?: Spacing;
};
