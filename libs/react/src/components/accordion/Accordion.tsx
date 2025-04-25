import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { triggerVariants, contentVariants } from './AccordionVariants';
import type { AccordionProps } from './Accordion.types';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const Accordion: React.FC<AccordionProps> = ({
  kind = 'primary',
  triggerText = 'Toggle Content',
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative" {...props}>
      <div
        onClick={handleToggle}
        className={twMerge(
          'flex items-center justify-between w-[500px] px-3 py-2 rounded-md transition-colors gap-2 border cursor-pointer',
          triggerVariants({ kind, isOpen })
        )}
        aria-expanded={isOpen}
      >
        <div>{triggerText}</div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <div
          className={twMerge(
            'absolute top-full left-0 mt-2 px-3 py-2 rounded-md transition-all duration-300 overflow-auto border',
            contentVariants({ kind })
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

Accordion.displayName = 'Accordion';
