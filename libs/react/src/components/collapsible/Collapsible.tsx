import React from 'react';
import { twMerge } from 'tailwind-merge';
import { triggerVariants, contentVariants } from './CollapsibleVariants';
import type { CollapsibleProps } from './Collapsible.types';

export const Collapsible: React.FC<CollapsibleProps> = ({
  kind = 'primary',
  triggerText = 'Toggle Content',
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        className={twMerge(
          'flex items-center justify-between w-full p-2 text-left rounded-md transition-colors',
          triggerVariants({ kind })
        )}
        aria-expanded={isOpen}
      >
        <span>{triggerText}</span>
        <svg
          className={twMerge(
            'w-4 h-4 transform transition-transform',
            isOpen ? 'rotate-180' : ''
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className={twMerge(
            'mt-2 p-4 rounded-md transition-all duration-200',
            contentVariants({ kind })
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

Collapsible.displayName = 'Collapsible';
