// libs/react/src/components/button/Button.tsx
import { forwardRef } from 'react';
import { mergeProps, mergeRefs, mergeEventHandlers } from '../../utils';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './Button.tailwind';
import {
  ButtonProps,
  DEFAULT_BUTTON_TAG,
  ALLOWED_OVERRIDE_BUTTON_TAGS,
} from './button.types';
import { validateAsTag } from '../validateAsTag';

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const {
    asTag,
    variant = 'default',
    size = 'md',
    className,
    children,
    ...rest
  } = props;

  // 1) 유효한 태그로 검증
  const Component = validateAsTag(
    asTag,
    ALLOWED_OVERRIDE_BUTTON_TAGS,
    DEFAULT_BUTTON_TAG
  );

  // 2) variant 함수로 클래스 생성 & twMerge로 병합
  const variantClasses = buttonVariants({ variant, size });
  const mergedClassName = twMerge(variantClasses, className);

  // 3) 이벤트 핸들러 · props · ref 병합
  const withEvents = mergeEventHandlers(rest, {}); // 기본 핸들러 없으면 {} 로
  const withProps = mergeProps(withEvents, { className: mergedClassName });
  const withPropsAndRef = mergeRefs(withProps, ref);

  return <Component {...withPropsAndRef}>{children}</Component>;
});

Button.displayName = 'Button';
