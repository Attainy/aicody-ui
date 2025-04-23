export function mergeAriaAttrs(
  ...sources: Array<React.AriaAttributes | undefined>
): React.AriaAttributes {
  return Object.assign({}, ...sources);
}
