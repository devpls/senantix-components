import { createVar, style } from "@vanilla-extract/css";

export const shadowVar = createVar();
export const radiusVar = createVar();
export const spacingVar = createVar();

export const container = style({
  boxShadow: shadowVar,
  borderRadius: radiusVar,
  padding: spacingVar,
});
