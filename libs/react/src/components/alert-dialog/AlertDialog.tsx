// aicody-ui/libs/react/src/components/alert-dialog/AlertDialog.tsx
import React from 'react';
import { Composer } from '../composer/Composer';
import { alertDialogVariants } from './AlertDialog.tailwind';
import { twMerge } from 'tailwind-merge';
import { mergeAll } from '../../utils/mergeAll';

export interface AlertDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const AlertDialogBase = (
  { variant, size, className, children, ...rest }: AlertDialogProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const variantClasses = alertDialogVariants({ variant, size });
  const mergedClassName = twMerge(variantClasses, className);

  const mergedProps = mergeAll({
    ...rest,
    ref,
    className: mergedClassName,
  });

  return <div {...mergedProps}>{children}</div>;
};

export const AlertDialog = Composer(AlertDialogBase);
AlertDialog.displayName = 'AlertDialog';
