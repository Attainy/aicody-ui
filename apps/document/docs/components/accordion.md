---
id: accordion
title: accordion 컴포넌트
sidebar_label: accordion
---

import React from 'react';
import { Accordion } from '@aicody-ui/react';

accordion 컴포넌트는 다양한 스타일과 상태를 지원하는 버튼 UI를 제공합니다.

<div className="flex gap-4 justify-center py-5">
  <Accordion kind="primary">Primary</Accordion>
</div>

## Usage

```tsx
import { Accordion } from '@aicody-ui/react';

export default function Page() {
  return <Accordion kind="primary">확인</Accordion>;
}
```

## API Reference

| Prop | Type                                             | Default |
| ---- | ------------------------------------------------ | ------- |
| kind | "primary" \| "secondary" \| "outline" \| "plain" | 테스트3 |
| size | "sm" \| "md" \| "lg"                             | 테스트3 |

## Examples

### kind

<div className="flex gap-4 justify-center py-5">
  <Accordion kind="primary">Primary</Accordion>
  <Accordion kind="secondary">Secondary</Accordion>
  <Accordion kind="outline">Outline</Accordion>
  <Accordion kind="plain">Plain</Accordion>
</div>

```tsx
<div className="flex gap-4 justify-center py-5">
  <Accordion kind="primary">Primary</Accordion>
  <Accordion kind="secondary">Secondary</Accordion>
  <Accordion kind="outline">Outline</Accordion>
  <Accordion kind="plain">Plain</Accordion>
</div>
```

### Size

<div className="flex gap-4 justify-center py-5">
  <Accordion size="sm">Small</Accordion>
  <Accordion size="md">Medium</Accordion>
  <Accordion size="lg">Large</Accordion>
</div>

```tsx
<div className="flex gap-4 justify-center py-5">
  <Accordion size="sm">Small</Accordion>
  <Accordion size="md">Medium</Accordion>
  <Accordion size="lg">Large</Accordion>
</div>
```
