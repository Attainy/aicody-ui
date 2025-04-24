---
id: profile-photo
title: profile-photo 컴포넌트
sidebar_label: profile-photo
---

import React from 'react';
import { ProfilePhoto } from '@aicody-ui/react';

profile-photo 컴포넌트는 다양한 스타일과 상태를 지원하는 버튼 UI를 제공합니다.

<div className="flex gap-4 justify-center py-5">
  <ProfilePhoto>Photo</ProfilePhoto>
</div>

## Usage

```tsx
import { ProfilePhoto } from '@aicody-ui/react';

export default function Page() {
  return <ProfilePhoto>확인</ProfilePhoto>;
}
```

## API Reference

| Prop | Type                                             | Default |
| ---- | ------------------------------------------------ | ------- |
| kind | "primary" \| "secondary" \| "outline" \| "plain" | 테스트3 |
| size | "sm" \| "md" \| "lg"                             | 테스트3 |

## Examples

### Size

<div className="flex gap-4 justify-center py-5">
  <ProfilePhoto size="sm">Small</ProfilePhoto>
  <ProfilePhoto size="md">Medium</ProfilePhoto>
  <ProfilePhoto size="lg">Large</ProfilePhoto>
</div>

```tsx
<div className="flex gap-4 justify-center py-5">
  <ProfilePhoto size="sm">Small</ProfilePhoto>
  <ProfilePhoto size="md">Medium</ProfilePhoto>
  <ProfilePhoto size="lg">Large</ProfilePhoto>
</div>
```
