export const getSize = (size: unknown, prefix = "size") => {
  if (size === undefined) {
    return undefined;
  }
  return isNaN(Number(size)) ? `var(--${prefix}-${size})` : (size as string);
};

export function getSpacing(size: unknown) {
  return getSize(size, "senantix-spacing");
}

export function getRadius(size: unknown) {
  if (size === undefined) {
    return "var(--senantix-radius-default)";
  }

  return getSize(size, "senantix-radius");
}

export function getFontSize(size: unknown) {
  return getSize(size, "senantix-font-size");
}

export function getLineHeight(size: unknown) {
  return getSize(size, "senantix-line-height");
}

export function getShadow(size: unknown) {
  if (!size) {
    return undefined;
  }

  return getSize(size, "senantix-shadow");
}
