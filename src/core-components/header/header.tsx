import { createElement, forwardRef } from "react";
import clsx from "clsx";

import { fontWeightVariant, headerVariants } from "./header.css.ts";
import { HeaderProps } from "./types.ts";

export const Header = forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ variant = "h1", weight, ...rest }, ref) => {
    return createElement(variant, {
      ref,
      className: clsx(headerVariants[variant], {
        ...(weight ? { [fontWeightVariant[weight]]: weight } : {}),
      }),
      ...rest,
    });
  },
);
