import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxProps } from './Checkbox.types';
import { checkboxInputVariants } from './CheckboxVariants';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ kind, size, label, className, ...props }, ref) => (
    <label
      className={twMerge(
        'inline-flex items-center gap-2 cursor-pointer text-brand-black',
        checkboxInputVariants({ size }),
        className
      )}
    >
      <input
        type="checkbox"
        className={twMerge(
          'appearance-none h-5 w-5 border-2 rounded',
          // unchecked
          'border-secondary-main',
          // checked: 배경색, 테두리, 그리고 흰색 SVG 체크 아이콘
          'checked:bg-secondary-main checked:border-secondary-main',
          `checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="white" d="M6 10l-3-3 1-1 2 2 4-4 1 1z"/></svg>')]`,
          'bg-center bg-no-repeat transition-colors'
          // checkboxInputVariants({ kind, size })
        )}
        {...props}
      />
      <input type="checkbox" className="sr-only peer" />
      <span
        className={twMerge(
          'inline-block h-5 w-5 border-2 rounded',
          'border-secondary-main peer-checked:bg-secondary-main peer-checked:border-secondary-main',
          // 체크됐을 때 자식 SVG를 보이게
          'relative'
        )}
      >
        <svg
          className="hidden peer-checked:block absolute inset-0 m-auto h-3 w-3 text-white"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M6 10l-3-3 1-1 2 2 4-4 1 1z" />
        </svg>
      </span>
      {label && <span>{label}</span>}
    </label>
  )
);

Checkbox.displayName = 'Checkbox';
