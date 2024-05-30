import { sizes } from "@app/constants/sizes.ts";
import { getSizesVariables } from "@app/utils";

import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

export const globalTheme = createGlobalTheme(":root", {
  shadows: getSizesVariables(sizes, "shadow"),
  radius: getSizesVariables(sizes, "radius"),
  spacing: getSizesVariables(sizes, "spacing"),
  lineHeight: getSizesVariables(sizes, "line-height"),
  fontSize: getSizesVariables(sizes, "font-size"),
  palette: {
    text: {
      primary: "var(--senantix-palette-text-primary)",
      secondary: "var(--senantix-palette-text-secondary)",
      disabled: "var(--senantix-palette-text-disabled)",
    },
    white: "var(--senantix-color-white)",
    black: "var(--senantix-color-black)",
    primary: {
      light: "var(--senantix-palette-pprimary-light)",
      main: "var(--senantix-palette-pprimary-main)",
      dark: "var(--senantix-palette-pprimary-dark)",
      "50": "var(--senantix-palette-pprimary-50)",
      "100": "var(--senantix-palette-pprimary-100)",
      "200": "var(--senantix-palette-pprimary-200)",
      "300": "var(--senantix-palette-pprimary-300)",
      "400": "var(--senantix-palette-pprimary-400)",
      "500": "var(--senantix-palette-pprimary-500)",
      "600": "var(--senantix-palette-pprimary-600)",
      "700": "var(--senantix-palette-pprimary-700)",
      "800": "var(--senantix-palette-pprimary-800)",
      "900": "var(--senantix-palette-pprimary-900)",
      "950": "var(--senantix-palette-pprimary-950)",
    },
    secondary: {
      light: "var(--senantix-palette-secondary-light)",
      main: "var(--senantix-palette-secondary-main)",
      dark: "var(--senantix-palette-secondary-dark)",
      "50": "var(--senantix-palette-secondary-50)",
      "100": "var(--senantix-palette-secondary-100)",
      "200": "var(--senantix-palette-secondary-200)",
      "300": "var(--senantix-palette-secondary-300)",
      "400": "var(--senantix-palette-secondary-400)",
      "500": "var(--senantix-palette-secondary-500)",
      "600": "var(--senantix-palette-secondary-600)",
      "700": "var(--senantix-palette-secondary-700)",
      "800": "var(--senantix-palette-secondary-800)",
      "900": "var(--senantix-palette-secondary-900)",
      "950": "var(--senantix-palette-secondary-950)",
    },
    neutral: {
      divider: "var(--senantix-palette-divider)",
      "50": "var(--senantix-palette-neutral-50)",
      "100": "var(--senantix-palette-neutral-100)",
      "200": "var(--senantix-palette-neutral-200)",
      "300": "var(--senantix-palette-neutral-300)",
      "400": "var(--senantix-palette-neutral-400)",
      "500": "var(--senantix-palette-neutral-500)",
      "600": "var(--senantix-palette-neutral-600)",
      "700": "var(--senantix-palette-neutral-700)",
      "800": "var(--senantix-palette-neutral-800)",
      "900": "var(--senantix-palette-neutral-900)",
      "950": "var(--senantix-palette-neutral-950)",
    },
  },
});
