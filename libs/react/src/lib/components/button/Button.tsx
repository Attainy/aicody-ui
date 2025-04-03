// aicody-ui/libs/react/src/components/button/Button.tsx
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeAll } from '../../../utils/mergeAll';
import { Composer } from '../composer/Composer';
import { buttonVariants } from './ButtonVariants';
import { validateAsTag } from '../../utils/validateAtag';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asTag?: string;
}

// Button.tsx 내에서 기본 태그와 허용 오버라이드 태그를 직접 설정합니다.
const DEFAULT_TAG = 'button';
const ALLOWED_OVERRIDE_TAGS: string[] = ['a', 'div'];

const ButtonBase = (props: ButtonProps, ref: React.Ref<any>) => {
  const { asTag, variant, size, className, children, ...rest } = props;

  // validateAsTag를 사용하여 asTag 값을 검증합니다.
  const Component = validateAsTag(asTag, ALLOWED_OVERRIDE_TAGS, DEFAULT_TAG);

  // tailwind-variants로 계산한 기본 클래스
  const variantClasses = buttonVariants({ variant, size });
  // tailwind-merge로 외부 className과 병합
  const mergedClassName = twMerge(variantClasses, className);

  // utils/mergeAll 함수를 통해 추가 props(예: 이벤트, 스타일, ref 등)를 병합
  const mergedProps = mergeAll({
    ...rest,
    className: mergedClassName,
    ref,
  });

  return <Component {...mergedProps}>{children}</Component>;
};

// export const Button = Composer<ButtonProps, HTMLButtonElement>(ButtonBase);
export const Button = Composer(ButtonBase);
Button.displayName = 'Button';
// export { Button, buttonVariants };
