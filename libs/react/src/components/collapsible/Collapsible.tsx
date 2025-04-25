import React, { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { triggerVariants, contentVariants } from './CollapsibleVariants';
import type { CollapsibleProps } from './Collapsible.types';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Collapsible: React.FC<CollapsibleProps> = ({
  triggerText = 'Toggle Content',
  children,
  defaultOpen = false,
  kind = 'primary',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const collapsibleId = React.useId();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // 콘텐츠 높이 동적 계산
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  return (
    <div className="w-[500px]">
      <div
        onClick={toggleOpen}
        className={twMerge(triggerVariants({ kind, isOpen }))}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`${collapsibleId}-content`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleOpen();
          }
        }}
      >
        <span>{triggerText}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </div>
      <div
        ref={contentRef}
        className={twMerge(contentVariants({ kind, isOpen }))}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : '0px',
        }}
        id={`${collapsibleId}-content`}
        role="region"
        aria-labelledby={collapsibleId}
      >
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
};

Collapsible.displayName = 'Collapsible';
