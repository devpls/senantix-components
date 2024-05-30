import { forwardRef } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import { globalTheme } from "@app/global.css.ts";

import {
  alignItemsVar,
  container,
  flexDirectionVar,
  flexWrapVar,
  gapVar,
  justifyContentVar,
} from "./styles.css.ts";
import { FlexProps } from "./types";

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      gap = "md",
      justifyContent = "flex-start",
      alignItems = "stretch",
      flexWrap = "nowrap",
      flexDirection = "row",
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(container, className)}
        style={assignInlineVars({
          [gapVar]: isNaN(Number(gap))
            ? globalTheme.spacing[gap] || 0
            : `${gap}px`,
          [justifyContentVar]: justifyContent,
          [alignItemsVar]: alignItems,
          [flexWrapVar]: flexWrap,
          [flexDirectionVar]: flexDirection,
        })}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
