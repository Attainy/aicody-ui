import React from 'react';
import {
  switchVariants,
  switchThumbVariants,
  labelVariants,
} from './SwitchVariants';
import type { SwitchProps } from './Switch.types';
import { twMerge } from 'tailwind-merge';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = 'md',
      kind = 'primary',
      checked,
      onCheckedChange,
      className,
      label,
      id,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked ?? false);
    const switchId = id || `switch-${React.useId()}`; // 고유 ID 생성

    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      if (!isControlled) {
        setIsChecked(newChecked);
      }
      onCheckedChange?.(newChecked);
    };

    return (
      <label
        htmlFor={switchId}
        className="inline-flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id={switchId}
          ref={ref}
          checked={currentChecked}
          onChange={handleChange}
          className="sr-only"
          aria-label={props['aria-label'] ?? (label || 'Toggle switch')}
          {...props}
        />
        <span
          className={twMerge(
            'relative inline-flex items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer',
            switchVariants({ size, kind, checked: currentChecked }),
            className
          )}
        >
          <span
            className={twMerge(
              'absolute left-0.5 bg-white rounded-full transition-transform duration-200 ease-in-out',
              switchThumbVariants({ size, checked: currentChecked })
            )}
          />
        </span>
        {label && (
          <span
            className={twMerge(
              'ml-2 text-sm font-medium text-brand-black',
              labelVariants({ size })
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
