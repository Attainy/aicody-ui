---
id: aspect-ratio
title: aspect-ratio 컴포넌트
sidebar_label: aspect-ratio
---

aspect-ratio 컴포넌트는 다양한 스타일과 상태를 지원하는 버튼 UI를 제공합니다.

import React from 'react';
import { AspectRatio } from '@aicody-ui/react';

<div className="flex gap-4 justify-center py-5">
  <AspectRatio kind="primary">Primary</AspectRatio>
</div>

## Usage

```tsx
import { AspectRatio } from '@aicody-ui/react';

export default function Page() {
  return <AspectRatio kind="primary">확인</AspectRatio>;
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
  <AspectRatio kind="primary">Primary</AspectRatio>
  <AspectRatio kind="secondary">Secondary</AspectRatio>
  <AspectRatio kind="outline">Outline</AspectRatio>
  <AspectRatio kind="plain">Plain</AspectRatio>
</div>

```tsx
<div className="flex gap-4 justify-center py-5">
  <AspectRatio kind="primary">Primary</AspectRatio>
  <AspectRatio kind="secondary">Secondary</AspectRatio>
  <AspectRatio kind="outline">Outline</AspectRatio>
  <AspectRatio kind="plain">Plain</AspectRatio>
</div>
```

### Size

<div className="flex gap-4 justify-center py-5">
  <AspectRatio size="sm">Small</AspectRatio>
  <AspectRatio size="md">Medium</AspectRatio>
  <AspectRatio size="lg">Large</AspectRatio>
</div>

```tsx
<div className="flex gap-4 justify-center py-5">
  <AspectRatio size="sm">Small</AspectRatio>
  <AspectRatio size="md">Medium</AspectRatio>
  <AspectRatio size="lg">Large</AspectRatio>
</div>
```
