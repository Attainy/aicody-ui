// aicody-ui/libs/react/src/components/button/Button.tsx
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeAll } from '../../../utils/mergeAll';
import { Composer } from '../composer/Composer';
import { buttonVariants } from './ButtonVariants';

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'default' | 'outline';
//   size?: 'sm' | 'md' | 'lg';
//   className?: string;
// }

// 허용할 태그를 미리 정의
export type AllowedTags = 'button' | 'a';
// ButtonProps에 asTag 프로퍼티 추가 및 허용 타입 지정
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asTag?: AllowedTags;
}

/*
const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-colors',
  variants: {
    variant: {
      default:
        'bg-blue-500 text-white hover:bg-blue-600 border-solid border border-gray-300',
      outline:
        'border-solid border border-blue-500 text-blue-500 hover:bg-blue-50',
    },
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
*/
const ButtonBase = (props: ButtonProps, ref: React.Ref<any>) => {
  const { asTag, variant, size, className, children, ...rest } = props;

  // 허용된 태그 목록
  const allowedTags: AllowedTags[] = ['button', 'a'];
  // asTag 값이 allowedTags에 포함되지 않으면 기본값 'button' 사용
  const Component: AllowedTags = allowedTags.includes(asTag as AllowedTags)
    ? (asTag as AllowedTags)
    : 'button';

  // const { variant, size, className, children, ...rest } = props;

  // 렌더링할 요소 타입 결정 (기본은 'button')
  // const Component = asTag || 'button';

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
