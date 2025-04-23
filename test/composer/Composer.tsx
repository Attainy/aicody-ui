import React, { forwardRef } from 'react';

/**
 * composeComponent는 컴포넌트의 공통 로직(forwardRef 등)을
 * 캡슐화하여 재사용할 수 있도록 도와주는 헬퍼 함수
 *
 * @param Component - ForwardRefRenderFunction을 받는 컴포넌트
 * @returns forwardRef로 래핑된 컴포넌트
 */
export function Composer<P, T extends HTMLElement>(
  Component: React.ForwardRefRenderFunction<T, P>
) {
  return forwardRef<T, P>(Component as any);
}
