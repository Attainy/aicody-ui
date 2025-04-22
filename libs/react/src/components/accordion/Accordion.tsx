// aicody-ui/libs/react/src/components/accordion/Accordion.tsx
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { accordionVariants } from './Accordion.tailwind';
import { mergeAll } from '../mergeAll';
import { Composer } from '../composer/Composer';
import { ChevronDown } from 'lucide-react';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  defaultOpen?: boolean;
  className?: string;
}

const AccordionBase = (
  { title, defaultOpen = false, className, children, ...rest }: AccordionProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const [open, setOpen] = useState(defaultOpen);

  const mergedClassName = twMerge(accordionVariants(), className);

  const mergedProps = mergeAll({
    ...rest,
    className: mergedClassName,
    ref,
  });

  return (
    <div {...mergedProps}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left font-medium transition-all"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transform transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && <div className="pb-4 text-sm text-gray-600">{children}</div>}
    </div>
  );
};

export const Accordion = Composer(AccordionBase);
Accordion.displayName = 'Accordion';
