import { globalTheme } from "@app/global.css.ts";

import { style } from "@vanilla-extract/css";

export const iconButton = style({
  all: "unset",
  padding: "0.5rem",
  borderRadius: "50%",
  cursor: "pointer",
  ":hover": {
    boxShadow: globalTheme.shadows.md,
  },
});

export const lineItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem",
  fontSize: globalTheme.fontSize.sm,
  outline: "none",
  ":hover": {
    backgroundColor: globalTheme.palette.neutral[100],
    border: "none",
    borderRadius: globalTheme.radius.sm,
  },
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  border: 1,
  borderColor: globalTheme.palette.neutral.divider,
  borderStyle: "solid",
  borderRadius: globalTheme.radius.md,
  padding: "0.25rem",
  minWidth: 220,
  backgroundColor: globalTheme.palette.white,
});
