---
id: alert-dialog
title: AlertDialog 컴포넌트
sidebar_label: AlertDialog
---

import React from 'react';
import { AlertDialog } from '@aicody-ui/react';

AlertDialog 컴포넌트는 사용자에게 확인 또는 취소 선택지를 제공하는 모달 다이얼로그 UI입니다. **kind** prop으로 스타일을 설정하고, **size** prop으로 다이얼로그 크기를 조정할 수 있습니다. **title**, **description**, **triggerText**, **cancelText**, **confirmText** prop으로 콘텐츠를 커스터마이징하며, **onConfirm** 콜백으로 확인 버튼의 동작을 정의합니다. Tailwind CSS를 기반으로 스타일링되며, 키보드 내비게이션(Escape, Tab 키)과 ARIA 속성을 지원해 접근성을 보장합니다.

<div className="py-5 flex justify-center">
  <AlertDialog
    kind="primary"
    size="md"
    title="Confirm Your Action"
    description="Are you sure you want to proceed? This action cannot be undone."
    triggerText="Take Action"
    cancelText="Cancel"
    confirmText="Continue"
    onConfirm={() => console.log('Confirmed')}
  />
</div>

## Usage

기본적으로 **kind**, **size**, **title**, **description**, **triggerText**, **cancelText**, **confirmText** prop을 사용해 다이얼로그를 설정합니다.

```tsx
import { AlertDialog } from '@aicody-ui/react';

export default function Page() {
  return <AlertDialog kind="primary" size="md" title="Confirm Your Action" description="Are you sure you want to proceed? This action cannot be undone." triggerText="Take Action" cancelText="Cancel" confirmText="Continue" onConfirm={() => console.log('Confirmed')} />;
}
```

## API Reference

| Prop            | Type                                               | Default                        | Description                                               |
| --------------- | -------------------------------------------------- | ------------------------------ | --------------------------------------------------------- |
| **kind**        | `"primary" \| "secondary" \| "plain" \| "outline"` | "primary"                      | 버튼과 다이얼로그의 스타일 변형 (배경색, 텍스트 색상 등). |
| **size**        | `"sm" \| "md" \| "lg"`                             | "md"                           | 다이얼로그의 최대 너비 (sm: 384px, md: 448px, lg: 512px). |
| **title**       | `string`                                           | "Confirm Your Action"          | 다이얼로그의 제목.                                        |
| **description** | `string`                                           | "Are you sure you want to...?" | 다이얼로그의 설명 텍스트.                                 |
| **triggerText** | `string`                                           | "Take Action"                  | 다이얼로그를 여는 버튼의 텍스트.                          |
| **cancelText**  | `string`                                           | "Cancel"                       | 취소 버튼의 텍스트.                                       |
| **confirmText** | `string`                                           | "Continue"                     | 확인 버튼의 텍스트.                                       |
| **onConfirm**   | `() => void`                                       | undefined                      | 확인 버튼 클릭 시 호출되는 콜백 함수.                     |

## Examples

### **kind**

**kind** prop을 사용하여 다이얼로그와 버튼의 스타일을 변경합니다.

<div className="flex gap-4 justify-center py-5">
  <AlertDialog
    kind="primary"
    triggerText="Primary"
    title="Primary Dialog"
    description="This is a primary styled dialog."
  />
  <AlertDialog
    kind="secondary"
    triggerText="Secondary"
    title="Secondary Dialog"
    description="This is a secondary styled dialog."
  />
  <AlertDialog
    kind="outline"
    triggerText="Outline"
    title="Outline Dialog"
    description="This is an outline styled dialog."
  />
  <AlertDialog
    kind="plain"
    triggerText="Plain"
    title="Plain Dialog"
    description="This is a plain styled dialog."
  />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <AlertDialog kind="primary" triggerText="Primary" title="Primary Dialog" description="This is a primary styled dialog." />
  <AlertDialog kind="secondary" triggerText="Secondary" title="Secondary Dialog" description="This is a secondary styled dialog." />
  <AlertDialog kind="outline" triggerText="Outline" title="Outline Dialog" description="This is an outline styled dialog." />
  <AlertDialog kind="plain" triggerText="Plain" title="Plain Dialog" description="This is a plain styled dialog." />
</div>
```

### **size**

**size** prop을 사용하여 다이얼로그의 크기를 조정합니다.

<div className="flex gap-4 justify-center py-5">
  <AlertDialog
    kind="primary"
    size="sm"
    triggerText="Small"
    title="Small Dialog"
    description="This is a small dialog."
  />
  <AlertDialog
    kind="primary"
    size="md"
    triggerText="Medium"
    title="Medium Dialog"
    description="This is a medium dialog."
  />
  <AlertDialog
    kind="primary"
    size="lg"
    triggerText="Large"
    title="Large Dialog"
    description="This is a large dialog."
  />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <AlertDialog kind="primary" size="sm" triggerText="Small" title="Small Dialog" description="This is a small dialog." />
  <AlertDialog kind="primary" size="md" triggerText="Medium" title="Medium Dialog" description="This is a medium dialog." />
  <AlertDialog kind="primary" size="lg" triggerText="Large" title="Large Dialog" description="This is a large dialog." />
</div>
```

### Custom Content

**title**, **description**, **triggerText**, **cancelText**, **confirmText** prop을 사용하여 다이얼로그 콘텐츠를 커스터마이징할 수 있습니다.

<div className="py-5 flex justify-center">
  <AlertDialog
    kind="secondary"
    size="md"
    title="Delete Item"
    description="Are you sure you want to delete this item? This action is permanent."
    triggerText="Delete"
    cancelText="No, Cancel"
    confirmText="Yes, Delete"
    onConfirm={() => console.log('Item deleted')}
  />
</div>

```tsx
<AlertDialog kind="secondary" size="md" title="Delete Item" description="Are you sure you want to delete this item? This action is permanent." triggerText="Delete" cancelText="No, Cancel" confirmText="Yes, Delete" onConfirm={() => console.log('Item deleted')} />
```

## Accessibility

AlertDialog 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **ARIA 속성**: `role="dialog"`, `aria-modal="true"`를 사용해 스크린 리더가 다이얼로그를 인식하도록 지원.
- **키보드 내비게이션**: **Escape** 키로 다이얼로그 닫기, **Tab** 키로 포커스 트랩(다이얼로그 내부 요소 간 이동) 지원.
- **포커스 관리**: 다이얼로그 열릴 때 취소 버튼에 자동 포커스, 바디 스크롤 잠금(`overflow: hidden`).
- **오버레이 클릭**: 다이얼로그 외부 클릭 시 닫기 기능.
