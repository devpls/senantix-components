export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type FontSizesValues = Record<Size | (string & {}), string>;
export type RadiusValues = Record<Size | (string & {}), string>;
export type SpacingValues = Record<Size | (string & {}), string>;
export type ShadowsValues = Record<Size | (string & {}), string>;
export type LineHeightValues = Record<Size | (string & {}), string>;

export type FontSize = keyof FontSizesValues;
export type Radius = keyof RadiusValues | (string & {}) | number;
export type Spacing = keyof SpacingValues | (string & {}) | number;
export type Shadow = keyof ShadowsValues | (string & {});
export type LineHeight = keyof LineHeightValues;
