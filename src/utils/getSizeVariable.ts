export function getSizesVariables(values: string[], name: string) {
  return values.reduce(
    (acc, key) => {
      acc[key] = `var(--senantix-${name}-${key})`;
      return acc;
    },
    {} as Record<string, string>,
  );
}
