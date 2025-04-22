export function mergeProps<T extends Record<string, any>>(
  defaults: Partial<T>,
  overrides: Partial<T>
): T {
  return { ...defaults, ...overrides } as T;
}
