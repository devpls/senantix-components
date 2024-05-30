import { styleVariants } from "@vanilla-extract/css";

export const headerVariants = styleVariants({
  h1: {
    fontSize: "--senantix-h1-font-size",
    fontWeight: "--senantix-h1-font-weight",
    lineHeight: "--senantix-h1-line-height",
  },
  h2: {
    fontSize: "--senantix-h2-font-size",
    fontWeight: "--senantix-h2-font-weight",
    lineHeight: "--senantix-h2-line-height",
  },
  h3: {
    fontSize: "--senantix-h3-font-size",
    fontWeight: "--senantix-h3-font-weight",
    lineHeight: "--senantix-h3-line-height",
  },
  h4: {
    fontSize: "--senantix-h4-font-size",
    fontWeight: "--senantix-h4-font-weight",
    lineHeight: "--senantix-h4-line-height",
  },
  h5: {
    fontSize: "--senantix-h5-font-size",
    fontWeight: "--senantix-h5-font-weight",
    lineHeight: "--senantix-h5-line-height",
  },
  h6: {
    fontSize: "--senantix-h6-font-size",
    fontWeight: "--senantix-h6-font-weight",
    lineHeight: "--senantix-h6-line-height",
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

export const fontWeightVariant = styleVariants({
  "100": {
    fontWeight: 100,
  },
  "200": {
    fontWeight: 200,
  },
  "300": {
    fontWeight: 300,
  },
  "400": {
    fontWeight: 400,
  },
  "500": {
    fontWeight: 500,
  },
  "600": {
    fontWeight: 600,
  },
  "700": {
    fontWeight: 700,
  },
  "800": {
    fontWeight: 800,
  },
  "900": {
    fontWeight: 900,
  },
});
