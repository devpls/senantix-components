import { globalTheme } from "@app/global.css.ts";

import { createVar, style, styleVariants } from "@vanilla-extract/css";

export const textSizeVariant = styleVariants({
  xs: {
    fontSize: globalTheme.fontSize.xs,
    lineHeight: globalTheme.lineHeight.xs,
  },
  sm: {
    fontSize: globalTheme.fontSize.sm,
    lineHeight: globalTheme.lineHeight.sm,
  },
  md: {
    fontSize: globalTheme.fontSize.md,
    lineHeight: globalTheme.lineHeight.md,
  },
  lg: {
    fontSize: globalTheme.fontSize.lg,
    lineHeight: globalTheme.lineHeight.lg,
  },
  xl: {
    fontSize: globalTheme.fontSize.xl,
    lineHeight: globalTheme.lineHeight.xl,
  },
});

export const alignVariant = styleVariants({
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});

export const colorVar = createVar();

export const container = style({
  color: colorVar,
});
