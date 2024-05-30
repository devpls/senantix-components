import { globalTheme } from "@app/global.css.ts";

import { style } from "@vanilla-extract/css";

export const footer = style({
  border: 0,
  borderTop: 1,
  borderColor: globalTheme.palette.neutral.divider,
  borderStyle: "solid",
  padding: `${globalTheme.spacing.xs} ${globalTheme.spacing.md}`,
});

export const content = style({
  padding: `${globalTheme.spacing.lg} ${globalTheme.spacing.lg}`,
});

export const headerIconWrapper = style({
  position: "relative",
  zIndex: 0,
  ":before": {
    content: " ",
    boxShadow: globalTheme.shadows.md,
    borderRadius: "50%",
    position: "absolute",
    left: "-4px",
    top: "-4px",
    right: "-4px",
    bottom: "-4px",
  },
});

export const headerWrapper = style({
  padding: `${globalTheme.spacing.md} ${globalTheme.spacing.md}`,
  paddingBottom: 0,
});
