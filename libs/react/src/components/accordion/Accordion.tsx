import React, { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { triggerVariants, contentVariants } from './AccordionVariants';
import type { AccordionProps } from './Accordion.types';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const Accordion: React.FC<AccordionProps> = ({
  kind = 'primary',
  items,
  value,
  onValueChange,
  defaultValue,
}) => {
  const [openSection, setOpenSection] = useState<string | undefined>(
    defaultValue ?? undefined
  );
  const contentRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [sectionHeights, setSectionHeights] = useState<Map<string, number>>(
    new Map()
  );

  const isControlled = value !== undefined;
  const currentOpenSection = isControlled ? value : openSection;

  const handleToggle = (itemId: string) => {
    const newValue = currentOpenSection === itemId ? undefined : itemId;
    if (!isControlled) {
      setOpenSection(newValue);
    }
    onValueChange?.(newValue ?? '');
  };

  // 콘텐츠 높이 동적 계산
  useEffect(() => {
    const newHeights = new Map<string, number>();
    contentRefs.current.forEach((ref, id) => {
      if (ref) {
        newHeights.set(id, ref.scrollHeight);
      }
    });
    setSectionHeights(newHeights);
  }, [items]);

  return (
    <div className="w-[500px] space-y-2">
      {items.map((item) => {
        const isSectionOpen = currentOpenSection === item.id;
        const sectionId = `accordion-${item.id}-${React.useId()}`;

        return (
          <div key={item.id}>
            <div
              onClick={() => handleToggle(item.id)}
              className={twMerge(
                triggerVariants({ kind, isOpen: isSectionOpen })
              )}
              role="button"
              aria-expanded={isSectionOpen}
              aria-controls={`${sectionId}-content`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleToggle(item.id);
                }
              }}
            >
              <span>{item.triggerText}</span>
              {isSectionOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
            <div
              ref={(el) => {
                if (el) {
                  contentRefs.current.set(item.id, el);
                } else {
                  contentRefs.current.delete(item.id);
                }
              }}
              className={twMerge(
                contentVariants({ kind, isOpen: isSectionOpen })
              )}
              style={{
                maxHeight: isSectionOpen
                  ? `${sectionHeights.get(item.id) ?? 0}px`
                  : '0px',
              }}
              id={`${sectionId}-content`}
              role="region"
              aria-labelledby={sectionId}
            >
              <div className="px-4 py-2">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.displayName = 'Accordion';
