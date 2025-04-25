---
id: collapsible
title: Collapsible 컴포넌트
sidebar_label: Collapsible
---

import React from 'react';
import { Collapsible } from '@aicody-ui/react';

Collapsible 컴포넌트는 확장/축소 가능한 콘텐츠 영역을 제공합니다. **triggerText** prop으로 트리거 버튼의 텍스트를 설정하고, **children** prop으로 표시할 콘텐츠를 지정합니다. **kind** prop으로 스타일을 커스터마이징하며, **defaultOpen** prop으로 초기 열림 상태를 설정할 수 있습니다. Tailwind CSS를 기반으로 스타일링되며, ARIA 속성과 키보드 내비게이션을 지원해 접근성을 보장합니다. 컨테이너의 너비는 기본적으로 500px로 고정되어 있습니다.

<div className="py-5 flex justify-center">
  <Collapsible
    triggerText="Toggle Content"
    kind="primary"
    defaultOpen={false}
  >
    This is the collapsible content. Click the trigger to toggle visibility.
  </Collapsible>
</div>

## Usage

기본적으로 **triggerText**, **kind**, **children** prop을 사용해 Collapsible을 설정합니다.

```tsx
import { Collapsible } from '@aicody-ui/react';

export default function Page() {
  return (
    <Collapsible triggerText="Toggle Content" kind="primary" defaultOpen={false}>
      This is the collapsible content.
    </Collapsible>
  );
}
```

## API Reference

| Prop            | Type                                  | Default          | Description                                                          |
| --------------- | ------------------------------------- | ---------------- | -------------------------------------------------------------------- |
| **triggerText** | `string`                              | "Toggle Content" | 트리거 버튼에 표시할 텍스트.                                         |
| **children**    | `React.ReactNode`                     | undefined        | 확장/축소 시 표시될 콘텐츠.                                          |
| **defaultOpen** | `boolean`                             | false            | 초기 열림 상태. true일 경우 초기 상태에서 콘텐츠가 표시됨.           |
| **kind**        | `"primary" \| "secondary" \| "plain"` | "primary"        | 트리거와 콘텐츠 영역의 스타일 변형 (배경색, 텍스트 색상, 테두리 등). |

## Examples

### **kind**

**kind** prop을 사용하여 트리거와 콘텐츠의 스타일을 변경합니다.

<div className="flex gap-4 justify-center py-5">
  <Collapsible triggerText="Primary" kind="primary">
    This is a primary styled collapsible.
  </Collapsible>
  <Collapsible triggerText="Secondary" kind="secondary">
    This is a secondary styled collapsible.
  </Collapsible>
  <Collapsible triggerText="Plain" kind="plain">
    This is a plain styled collapsible.
  </Collapsible>
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Collapsible triggerText="Primary" kind="primary">
    This is a primary styled collapsible.
  </Collapsible>
  <Collapsible triggerText="Secondary" kind="secondary">
    This is a secondary styled collapsible.
  </Collapsible>
  <Collapsible triggerText="Plain" kind="plain">
    This is a plain styled collapsible.
  </Collapsible>
</div>
```

### **defaultOpen**

**defaultOpen** prop을 사용하여 초기 열림 상태를 설정합니다.

<div className="py-5 flex justify-center">
  <Collapsible
    triggerText="Initially Open"
    kind="primary"
    defaultOpen={true}
  >
    This content is visible by default.
  </Collapsible>
</div>

```tsx
<Collapsible triggerText="Initially Open" kind="primary" defaultOpen={true}>
  This content is visible by default.
</Collapsible>
```

### Multiple Collapsible

여러 개의 Collapsible을 함께 사용할 수 있습니다.

<div className="space-y-4 py-5">
  <Collapsible triggerText="Section 1" kind="plain" defaultOpen={true}>
    Content for Section 1
  </Collapsible>
  <Collapsible triggerText="Section 2" kind="plain" defaultOpen={false}>
    Content for Section 2
  </Collapsible>
  <Collapsible triggerText="Section 3" kind="plain" defaultOpen={false}>
    Content for Section 3
  </Collapsible>
</div>

```tsx
<div className="space-y-4">
  <Collapsible triggerText="Section 1" kind="plain" defaultOpen={true}>
    Content for Section 1
  </Collapsible>
  <Collapsible triggerText="Section 2" kind="plain" defaultOpen={false}>
    Content for Section 2
  </Collapsible>
  <Collapsible triggerText="Section 3" kind="plain" defaultOpen={false}>
    Content for Section 3
  </Collapsible>
</div>
```

## Accessibility

Collapsible 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **ARIA 속성**: `role="button"`, `aria-expanded`, `role="region"`을 사용해 스크린 리더가 상태를 인식하도록 지원.
- **키보드 내비게이션**: **Enter**와 **Space** 키로 트리거를 토글 가능.
- **포커스 관리**: 트리거 버튼에 `tabIndex={0}` 설정으로 키보드 포커스 가능.
- **동적 높이 계산**: 콘텐츠 높이를 동적으로 계산하여 부드러운 애니메이션 제공.

## Notes

- Collapsible의 너비는 기본적으로 500px로 고정되어 있습니다.
- 트리거 버튼에는 Chevron 아이콘(**ChevronUp**, **ChevronDown**)이 표시되며, 열림 상태에 따라 변경됩니다.
- **kind**에 따라 트리거와 콘텐츠의 스타일이 달라집니다(**primary**, **secondary**는 색상 기반, **plain**은 회색 테마).
