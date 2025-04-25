---
id: accordion
title: Accordion 컴포넌트
sidebar_label: Accordion
---

import React from 'react';
import { Accordion } from '@aicody-ui/react';

Accordion 컴포넌트는 확장/축소 가능한 아코디언 UI를 제공하며, 각 섹션의 열림/닫힘 상태를 제어할 수 있습니다. **items** prop으로 아코디언 항목을 정의하고, **kind** prop으로 스타일을 커스터마이징할 수 있습니다. **value**와 **onValueChange**를 사용해 제어된 컴포넌트로 동작하거나, **defaultValue**로 초기 상태를 설정할 수 있습니다. Tailwind CSS를 기반으로 스타일링되며, 키보드 내비게이션과 ARIA 속성을 지원해 접근성을 보장합니다.

<div className="py-5 flex justify-center">
  <Accordion
    kind="primary"
    items={[
      {
        id: 'section-1',
        triggerText: 'Section 1',
        content: 'Content for Section 1. Click the trigger to toggle visibility.',
      },
      {
        id: 'section-2',
        triggerText: 'Section 2',
        content: 'Content for Section 2. Click the trigger to toggle visibility.',
      },
    ]}
    defaultValue="section-1"
  />
</div>

## Usage

기본적으로 **items**와 **kind** prop을 사용해 아코디언을 설정합니다.

```tsx
import { Accordion } from '@aicody-ui/react';

export default function Page() {
  return (
    <Accordion
      kind="primary"
      items={[
        {
          id: 'section-1',
          triggerText: 'Section 1',
          content: 'Content for Section 1.',
        },
        {
          id: 'section-2',
          triggerText: 'Section 2',
          content: 'Content for Section 2.',
        },
      ]}
      defaultValue="section-1"
    />
  );
}
```

## Controlled Accordion

**value**와 **onValueChange**를 사용해 아코디언의 상태를 제어할 수 있습니다.

```tsx
import { useState } from 'react';
import { Accordion } from '@aicody-ui/react';

export default function ControlledAccordion() {
  const [value, setValue] = useState('section-1');

  return (
    <Accordion
      kind="primary"
      items={[
        {
          id: 'section-1',
          triggerText: 'Section 1',
          content: 'Content for Section 1.',
        },
        {
          id: 'section-2',
          triggerText: 'Section 2',
          content: 'Content for Section 2.',
        },
      ]}
      value={value}
      onValueChange={setValue}
    />
  );
}
```

## API Reference

| Prop          | Type                                                              | Default   | Description                                                              |
| ------------- | ----------------------------------------------------------------- | --------- | ------------------------------------------------------------------------ |
| items         | `{ id: string; triggerText: string; content: React.ReactNode }[]` | []        | 아코디언 항목 배열. 각 항목은 고유 ID, 트리거 텍스트, 내용을 포함합니다. |
| kind          | `"primary" \| "secondary" \| "plain"`                             | "primary" | 아코디언의 스타일 변형 (배경색, 텍스트 색상 등).                         |
| defaultValue  | `string`                                                          | undefined | 초기 열림 섹션의 ID. 비제어 컴포넌트에서 사용됩니다.                     |
| value         | `string`                                                          | undefined | 현재 열림 섹션의 ID. 제어 컴포넌트에서 사용됩니다.                       |
| onValueChange | `(value: string) => void`                                         | undefined | 열림 섹션이 변경될 때 호출되는 콜백. 제어 컴포넌트에서 사용됩니다.       |

## Examples

### Kind

**kind** prop을 사용하여 아코디언의 스타일을 변경합니다.

<div className="space-y-4 py-5">
  <Accordion
    kind="primary"
    items={[
      {
        id: 'section-1',
        triggerText: 'Primary Accordion',
        content: 'This is a primary styled accordion.',
      },
    ]}
  />
  <Accordion
    kind="secondary"
    items={[
      {
        id: 'section-1',
        triggerText: 'Secondary Accordion',
        content: 'This is a secondary styled accordion.',
      },
    ]}
  />
  <Accordion
    kind="plain"
    items={[
      {
        id: 'section-1',
        triggerText: 'Plain Accordion',
        content: 'This is a plain styled accordion.',
      },
    ]}
  />
</div>

```tsx
<div className="space-y-4">
  <Accordion
    kind="primary"
    items={[
      {
        id: 'section-1',
        triggerText: 'Primary Accordion',
        content: 'This is a primary styled accordion.',
      },
    ]}
  />
  <Accordion
    kind="secondary"
    items={[
      {
        id: 'section-1',
        triggerText: 'Secondary Accordion',
        content: 'This is a secondary styled accordion.',
      },
    ]}
  />
  <Accordion
    kind="plain"
    items={[
      {
        id: 'section-1',
        triggerText: 'Plain Accordion',
        content: 'This is a plain styled accordion.',
      },
    ]}
  />
</div>
```

### Controlled vs Uncontrolled

제어 컴포넌트와 비제어 컴포넌트를 비교합니다.

<div className="space-y-4 py-5">
  <Accordion
    kind="primary"
    items={[
      {
        id: 'section-1',
        triggerText: 'Uncontrolled Section',
        content: 'This accordion uses defaultValue.',
      },
    ]}
    defaultValue="section-1"
  />
  <Accordion
    kind="secondary"
    items={[
      {
        id: 'section-1',
        triggerText: 'Controlled Section',
        content: 'This accordion is controlled by value/onValueChange.',
      },
    ]}
    value="section-1"
    onValueChange={() => {}}
  />
</div>

```tsx
import { useState } from 'react';
import { Accordion } from '@aicody-ui/react';

export default function AccordionExample() {
  const [value, setValue] = useState('section-1');

  return (
    <div className="space-y-4">
      <Accordion
        kind="primary"
        items={[
          {
            id: 'section-1',
            triggerText: 'Uncontrolled Section',
            content: 'This accordion uses defaultValue.',
          },
        ]}
        defaultValue="section-1"
      />
      <Accordion
        kind="secondary"
        items={[
          {
            id: 'section-1',
            triggerText: 'Controlled Section',
            content: 'This accordion is controlled by value/onValueChange.',
          },
        ]}
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
}
```

## Accessibility

Accordion 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- ARIA 속성( `aria-expande`,`aria-control`,`role="region` )을 사용해 스크린 리더 지원.
- 키보드 내비게이션: **Enter**와 **Space** 키로 섹션 토글 가능.
- 동적 콘텐츠 높이 계산으로 부드러운 애니메이션 제공.
