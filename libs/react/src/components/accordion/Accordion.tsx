import React, { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { triggerVariants, contentVariants } from './AccordionVariants';
import type { AccordionProps } from './Accordion.types';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const Accordion: React.FC<AccordionProps> = ({
  kind = 'primary',
  triggerText = 'Toggle Content',
  children,
  id,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const accordionId = id || `accordion-${React.useId()}`;

  const handleToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  return (
    <div className="relative" {...props}>
      <div
        onClick={handleToggle}
        className={twMerge(
          'flex items-center justify-between w-[500px] px-3 py-2 rounded-md transition-colors gap-2 border cursor-pointer',
          triggerVariants({ kind, isOpen })
        )}
        aria-expanded={isOpen}
        aria-controls={`${accordionId}-content`}
      >
        <div>{triggerText}</div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div
        ref={contentRef}
        className={twMerge(contentVariants({ kind, isOpen }))}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : '0px',
        }}
        id={`${accordionId}-content`}
        role="region"
        aria-labelledby={accordionId}
      >
        {children}
      </div>
    </div>
  );
};

Accordion.displayName = 'Accordion';
