import React from 'react';
import { cn } from '../../lib/utils';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render as */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  /** Size variant */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  /** Optional CSS class to add custom styles */
  className?: string;
  /** Content of the typography component */
  children: React.ReactNode;
}

const variantClassMap = {
  h1: 'text-3xl font-semibold leading-[1.2] tracking-[-0.75%] text-[#0F172A]',
  h2: 'text-2xl font-semibold leading-[1.2] text-[#0F172A]',
  h3: 'text-xl font-medium leading-[1.4] text-[#0F172A]',
  h4: 'text-lg font-medium leading-[1.4] text-[#0F172A]',
  body: 'text-base font-normal leading-[1.4] text-[#475569]',
  small: 'text-sm font-normal leading-[1.333] text-[#475569]',
};

const defaultElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  small: 'span',
} as const;

/**
 * Typography component for consistent text styling
 */
export const Typography = ({
  as,
  variant = 'body',
  className,
  children,
  ...props
}: TypographyProps) => {
  const Element = as || defaultElementMap[variant] || 'p';

  return (
    <Element className={cn(variantClassMap[variant], className)} {...props}>
      {children}
    </Element>
  );
};

// Export named variants for convenience
export const H1 = (props: Omit<TypographyProps, 'as' | 'variant'>) => (
  <Typography as="h1" variant="h1" {...props} />
);

export const H2 = (props: Omit<TypographyProps, 'as' | 'variant'>) => (
  <Typography as="h2" variant="h2" {...props} />
);

export const H3 = (props: Omit<TypographyProps, 'as' | 'variant'>) => (
  <Typography as="h3" variant="h3" {...props} />
);

export const H4 = (props: Omit<TypographyProps, 'as' | 'variant'>) => (
  <Typography as="h4" variant="h4" {...props} />
);

export const Body = (props: Omit<TypographyProps, 'as' | 'variant'>) => (
  <Typography variant="body" {...props} />
);

export const Small = (props: Omit<TypographyProps, 'as' | 'variant'>) => (
  <Typography variant="small" {...props} />
);
