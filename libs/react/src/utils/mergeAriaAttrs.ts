export function mergeAriaAttrs(
  defaults: React.AriaAttributes,
  overrides: React.AriaAttributes
): React.AriaAttributes {
  return { ...defaults, ...overrides };
}
