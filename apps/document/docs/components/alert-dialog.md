---
id: alert-dialog
title: alert-dialog 컴포넌트
sidebar_label: alert-dialog
---

import React from 'react';
import { AlertDialog } from '@aicody-ui/react';

alert-dialog 컴포넌트는 다양한 스타일과 상태를 지원하는 버튼 UI를 제공합니다.

<div className="flex gap-4 justify-center py-5">
  <AlertDialog kind="primary">Primary</AlertDialog>
</div>

## Usage

```tsx
import { AlertDialog } from '@aicody-ui/react';

export default function Page() {
  return <AlertDialog kind="primary">확인</AlertDialog>;
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
  <AlertDialog kind="primary">Primary</AlertDialog>
  <AlertDialog kind="secondary">Secondary</AlertDialog>
  <AlertDialog kind="outline">Outline</AlertDialog>
  <AlertDialog kind="plain">Plain</AlertDialog>
</div>

```tsx
<div className="flex gap-4 justify-center py-5">
  <AlertDialog kind="primary">Primary</AlertDialog>
  <AlertDialog kind="secondary">Secondary</AlertDialog>
  <AlertDialog kind="outline">Outline</AlertDialog>
  <AlertDialog kind="plain">Plain</AlertDialog>
</div>
```

### Size

<div className="flex gap-4 justify-center py-5">
  <AlertDialog size="sm">Small</AlertDialog>
  <AlertDialog size="md">Medium</AlertDialog>
  <AlertDialog size="lg">Large</AlertDialog>
</div>

```tsx
<div className="flex gap-4 justify-center py-5">
  <AlertDialog size="sm">Small</AlertDialog>
  <AlertDialog size="md">Medium</AlertDialog>
  <AlertDialog size="lg">Large</AlertDialog>
</div>
```
