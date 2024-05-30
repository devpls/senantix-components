import { forwardRef } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import { globalTheme } from "@app/global.css.ts";

import { container, radiusVar, shadowVar, spacingVar } from "./styles.css.ts";
import { PaperProps } from "./types.ts";

export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    { children, radius = "md", shadow = "md", spacing = "md", ...rest },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(container)}
        style={assignInlineVars({
          [radiusVar]: globalTheme.radius[radius],
          [shadowVar]: globalTheme.shadows[shadow],
          [spacingVar]: globalTheme.spacing[spacing],
        })}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
