export function mergeAttributes(
  defaults: Record<string, any>,
  overrides: Record<string, any>
) {
  const out: Record<string, any> = { ...defaults };
  Object.keys(overrides).forEach((key) => {
    if (overrides[key] !== undefined) {
      out[key] = overrides[key];
    }
  });
  return out;
}
