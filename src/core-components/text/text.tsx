import { createElement, forwardRef } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import {
  alignVariant,
  colorVar,
  container,
  textSizeVariant,
} from "./text.css.ts";
import { TextProps } from "./types.ts";

export const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ span = false, color, size = "md", align = "left", ...rest }, ref) => {
    const element = span ? "span" : "p";
    return createElement(element, {
      ref,
      className: clsx(container, textSizeVariant[size], alignVariant[align]),
      style: assignInlineVars({
        [colorVar]: color,
      }),
      ...rest,
    });
  },
);
