import { createVar, style } from "@vanilla-extract/css";

export const gapVar = createVar();
export const justifyContentVar = createVar();
export const alignItemsVar = createVar();
export const flexWrapVar = createVar();
export const flexDirectionVar = createVar();

export const container = style({
  display: "flex",
  gap: gapVar,
  justifyContent: justifyContentVar,
  alignItems: alignItemsVar,
  flexWrap: flexWrapVar,
  flexDirection: flexDirectionVar,
});
