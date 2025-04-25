import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxProps } from './Checkbox.types';
import { checkboxInputVariants } from './CheckboxVariants';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      kind = 'primary',
      size = 'md',
      shape = 'rounded',
      label,
      className,
      disabled,
      checked,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked ?? false);
    const checkboxId = React.useId(); // 고유 ID 생성

    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return; // 비활성화 시 동작 방지
      const newChecked = e.target.checked;
      if (!isControlled) {
        setIsChecked(newChecked);
      }
      onChange?.(e);
    };

    return (
      <label
        htmlFor={checkboxId}
        className={twMerge(
          'inline-flex items-center gap-2',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          'text-brand-black'
        )}
      >
        <input
          type="checkbox"
          id={checkboxId}
          ref={ref}
          checked={currentChecked}
          onChange={handleChange}
          className={twMerge(
            'appearance-none relative inline-flex items-center justify-center',
            'border border-brand-black transition-colors duration-200',
            'focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1',
            checkboxInputVariants({ kind, size, shape, disabled }),
            className
          )}
          disabled={disabled}
          aria-checked={currentChecked}
          aria-label={
            props['aria-label'] ??
            (typeof label === 'string' ? label : 'Checkbox')
          }
          {...props}
        />
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
