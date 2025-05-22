import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn } from '../../lib/utils';

const HoverCardRoot = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

/**
 * Hover Card Content component
 */
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'z-50 w-64 rounded-md border border-[#E5E7EB] bg-white p-4 shadow-sm',
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = 'HoverCardContent';

/**
 * A UI component that displays additional information when hovering over a trigger element.
 */
export {
  HoverCardRoot as Root,
  HoverCardTrigger as Trigger,
  HoverCardContent as Content,
};

export { HoverCardRoot, HoverCardTrigger, HoverCardContent };
