---
id: switch
title: switch 컴포넌트
sidebar_label: switch
---

import React from 'react';
import { Button } from '@aicody-ui/react';

profile-photo 컴포넌트는 다양한 스타일과 상태를 지원하는 버튼 UI를 제공합니다.

<div className="flex gap-4 justify-center py-5">
  <Button kind="primary">Primary</Button>
</div>

## Usage

```tsx
import { Button } from '@aicody-ui/react';

export default function Page() {
  return <Button kind="primary">확인</Button>;
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
  <Button kind="primary">Primary</Button>
  <Button kind="secondary">Secondary</Button>
  <Button kind="outline">Outline</Button>
  <Button kind="plain">Plain</Button>
</div>

```tsx
<div className="flex gap-4 justify-center py-5">
  <Button kind="primary">Primary</Button>
  <Button kind="secondary">Secondary</Button>
  <Button kind="outline">Outline</Button>
  <Button kind="plain">Plain</Button>
</div>
```

### Size

<div className="flex gap-4 justify-center py-5">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>

```tsx
<div className="flex gap-4 justify-center py-5">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>
```
