---
id: command
title: Command 컴포넌트
sidebar_label: Command
---

import React from 'react';
import { Command } from '@aicody-ui/react';

Command 컴포넌트는 검색 가능한 명령 목록을 제공하는 UI입니다. **suggestions** prop으로 명령 목록을 정의하며, 사용자가 입력한 검색어에 따라 필터링된 결과를 표시합니다. 키보드 내비게이션(ArrowUp, ArrowDown, Enter)을 지원하며, Tailwind CSS를 기반으로 스타일링됩니다. 최대 너비는 448px로 설정되어 있으며, 목록은 최대 높이 240px로 스크롤 가능합니다.

<div className="py-5 flex justify-center">
  <Command
    suggestions={[
      { id: '1', label: 'Open Dashboard', action: () => console.log('Opening Dashboard') },
      { id: '2', label: 'Search Users', action: () => console.log('Searching Users') },
      { id: '3', label: 'Settings', action: () => console.log('Opening Settings') },
      { id: '4', label: 'Logout', action: () => console.log('Logging out') },
    ]}
  />
</div>

## Usage

기본적으로 **suggestions** prop을 사용해 명령 목록을 설정합니다.

```tsx
import { Command } from '@aicody-ui/react';

export default function Page() {
  return (
    <Command
      suggestions={[
        { id: '1', label: 'Open Dashboard', action: () => console.log('Opening Dashboard') },
        { id: '2', label: 'Search Users', action: () => console.log('Searching Users') },
        { id: '3', label: 'Settings', action: () => console.log('Opening Settings') },
        { id: '4', label: 'Logout', action: () => console.log('Logging out') },
      ]}
    />
  );
}
```

## API Reference

| Prop            | Type                                                  | Default | Description                                                                    |
| --------------- | ----------------------------------------------------- | ------- | ------------------------------------------------------------------------------ |
| **suggestions** | `{ id: string; label: string; action: () => void }[]` | []      | 명령 목록 배열. 각 항목은 고유 ID, 표시할 라벨, 실행할 액션 함수를 포함합니다. |

## Examples

### Default

기본 명령 목록이 있는 Command 컴포넌트입니다.

<div className="py-5 flex justify-center">
  <Command
    suggestions={[
      { id: '1', label: 'Open Dashboard', action: () => console.log('Opening Dashboard') },
      { id: '2', label: 'Search Users', action: () => console.log('Searching Users') },
      { id: '3', label: 'Settings', action: () => console.log('Opening Settings') },
      { id: '4', label: 'Logout', action: () => console.log('Logging out') },
    ]}
  />
</div>

```tsx
<Command
  suggestions={[
    { id: '1', label: 'Open Dashboard', action: () => console.log('Opening Dashboard') },
    { id: '2', label: 'Search Users', action: () => console.log('Searching Users') },
    { id: '3', label: 'Settings', action: () => console.log('Opening Settings') },
    { id: '4', label: 'Logout', action: () => console.log('Logging out') },
  ]}
/>
```

### Empty

**suggestions**가 없는 경우 "No results found." 메시지가 표시됩니다.

<div className="py-5 flex justify-center">
  <Command suggestions={[]} />
</div>

```tsx
<Command suggestions={[]} />
```

## Accessibility

Command 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **ARIA 속성**: 목록 항목에 `role="option"`, `aria-selected`를 사용해 스크린 리더가 선택 상태를 인식하도록 지원.
- **키보드 내비게이션**: **ArrowUp**, **ArrowDown**으로 항목 간 이동, **Enter**로 선택된 항목의 액션 실행.
- **포커스 관리**: 컴포넌트 렌더링 시 입력창에 자동 포커스, 포커스 상태에 따라 검색 아이콘 색상 변경.

## Notes

- Command 컴포넌트의 최대 너비는 448px로 설정되어 있습니다.
- 목록은 최대 높이 240px로 제한되며, 스크롤 가능합니다.
- 검색 입력창은 포커스 시 하단 그림자 효과(`focus:shadow-ring-bottom`)가 적용됩니다.
- 선택된 항목은 `bg-blue-100` 스타일로 강조됩니다.
