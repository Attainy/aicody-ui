---
id: button
title: Button
sidebar_label: Button
description: 브랜드 색상·사이즈·변형(variant)을 지원하는 Aicody-UI 기본 버튼
keywords: [button, aicody-ui, tailwind, react]
---

import React from 'react';
import { Button } from '@aicody-ui/react';

**Button** 컴포넌트는 사용자에게 **주요 액션**(저장, 전송, 확인 등)을 제공할 때 사용합니다.  
**kind**, **size** 속성을 조합해 브랜드 토큰을 손쉽게 적용할 수 있습니다.

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
