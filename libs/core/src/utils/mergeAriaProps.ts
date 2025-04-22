export function mergeAriaProps(
  defaults: React.AriaAttributes,
  overrides: React.AriaAttributes
): React.AriaAttributes {
  return { ...defaults, ...overrides };
}
