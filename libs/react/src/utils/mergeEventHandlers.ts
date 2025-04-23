import React from 'react';

export function mergeEventHandlers<E extends React.SyntheticEvent>(
  ...handlers: Array<((event: E) => void | false | undefined) | undefined>
) {
  return (event: E) => {
    for (const handler of handlers) {
      if (handler) {
        const res = handler(event);
        if (res === false || event.defaultPrevented) return;
      }
    }
  };
}
