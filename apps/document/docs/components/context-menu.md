---
id: context-menu
title: ContextMenu 컴포넌트
sidebar_label: ContextMenu
---

import React from 'react';
import { ContextMenu } from '@aicody-ui/react';

ContextMenu 컴포넌트는 우클릭 시 표시되는 컨텍스트 메뉴를 제공합니다. **triggerText** prop으로 트리거 영역의 텍스트를 설정하고, **children** prop으로 추가 메뉴 항목을 지정할 수 있습니다. Tailwind CSS를 기반으로 스타일링되며, ARIA 속성과 클릭 외부 처리로 접근성을 지원합니다. 메뉴는 우클릭 위치에 따라 동적으로 배치되며, 화면 경계를 벗어나지 않도록 조정됩니다.

<div className="py-5 flex justify-center">
  <ContextMenu triggerText="Right-click here" />
</div>

## Usage

기본적으로 **triggerText** prop을 사용해 트리거 영역의 텍스트를 설정합니다.

```tsx
import { ContextMenu } from '@aicody-ui/react';

export default function Page() {
  return <ContextMenu triggerText="Right-click here" />;
}
```

## With Custom Items

**children** prop을 사용하여 추가 메뉴 항목을 정의할 수 있습니다.

```tsx
import { ContextMenu } from '@aicody-ui/react';

export default function Page() {
  return (
    <ContextMenu triggerText="Right-click here">
      <button className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100">Custom Item</button>
    </ContextMenu>
  );
}
```

## API Reference

| Prop            | Type              | Default            | Description                         |
| --------------- | ----------------- | ------------------ | ----------------------------------- |
| **triggerText** | `string`          | "Right-click here" | 트리거 영역에 표시할 텍스트.        |
| **children**    | `React.ReactNode` | undefined          | 컨텍스트 메뉴에 추가할 커스텀 항목. |

## Examples

### Default

기본 컨텍스트 메뉴에는 `Edit`, `Duplicate`, `Delete`, `More` 항목이 포함됩니다.

<div className="py-5 flex justify-center">
  <ContextMenu triggerText="Right-click here" />
</div>

```tsx
<ContextMenu triggerText="Right-click here" />
```

### Custom Items

**children** prop을 사용하여 커스텀 메뉴 항목을 추가합니다.

<div className="py-5 flex justify-center">
  <ContextMenu triggerText="Custom Menu">
    <button className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100">
      Share
    </button>
    <button className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100">
      Download
    </button>
  </ContextMenu>
</div>

```tsx
<ContextMenu triggerText="Custom Menu">
  <button className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100">Share</button>
  <button className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100">Download</button>
</ContextMenu>
```

## Accessibility

ContextMenu 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **ARIA 속성**: `role="menu"`, `role="menuitem"`, `aria-orientation="vertical"`을 사용해 스크린 리더가 메뉴 구조를 인식하도록 지원.
- **클릭 외부 처리**: 메뉴 외부 클릭 시 자동으로 닫힘.
- **동적 위치 조정**: 화면 경계를 벗어나지 않도록 메뉴 위치를 조정하여 키보드 및 마우스 사용자 모두 접근 가능.

## Notes

- 트리거 영역은 300px × 150px 크기의 점선 테두리 박스로 표시됩니다.
- 메뉴의 기본 항목은 **Edit**, **Duplicate**, **Delete**, **More**이며, **Delete**는 위험 항목(`isDanger`) 스타일로 표시됩니다.
- 메뉴 너비는 160px로 고정되어 있으며, `shadow-md`와 `rounded-lg` 스타일이 적용됩니다.
- `children`으로 추가된 항목은 기본 항목 뒤에 렌더링됩니다.
