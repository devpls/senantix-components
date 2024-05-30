import { globalTheme } from "@app/global.css.ts";

import { style, styleVariants } from "@vanilla-extract/css";

export const sizeVariants = styleVariants({
  small: {
    padding: "0.25rem 0.5rem",
    fontSize: globalTheme.fontSize.sm,
    borderRadius: globalTheme.radius.sm,
  },
  medium: {
    padding: "0.5rem 1rem",
    fontSize: globalTheme.fontSize.md,
    borderRadius: globalTheme.radius.md,
  },
  large: {
    padding: "0.75rem 1.5rem",
    fontSize: globalTheme.fontSize.lg,
    borderRadius: globalTheme.radius.lg,
  },
});

export const variantVariants = styleVariants({
  primary: {
    backgroundColor: globalTheme.palette.black,
    color: globalTheme.palette.white,
    borderColor: globalTheme.palette.black,
    ":hover": {
      backgroundColor: globalTheme.palette.neutral["800"],
    },
  },
  secondary: {
    backgroundColor: globalTheme.palette.white,
    color: globalTheme.palette.black,
    borderColor: globalTheme.palette.primary.main,
    ":hover": {
      backgroundColor: globalTheme.palette.neutral["50"],
    },
  },
});

export const container = style({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  gap: "0.5rem",
  borderWidth: "1px",
  borderStyle: "solid",
  cursor: "pointer",
});
