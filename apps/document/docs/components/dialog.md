---
id: dialog
title: Dialog 컴포넌트
sidebar_label: Dialog
---

import React from 'react';
import { Dialog } from '@aicody-ui/react';

Dialog 컴포넌트는 사용자 입력을 받는 모달 다이얼로그 UI를 제공합니다. **kind** prop으로 스타일을 설정하고, **triggerText**, **title**, **description**, **initialName**, **initialUsername**, **initialEmail**, **cancelButtonText**, **saveButtonText** prop으로 콘텐츠를 커스터마이징할 수 있습니다. Tailwind CSS를 기반으로 스타일링되며, 키보드 내비게이션(Escape, Tab 키)과 ARIA 속성을 지원해 접근성을 보장합니다. 다이얼로그는 최대 너비 448px로 중앙에 표시되며, 외부 클릭 또는 Escape 키로 닫을 수 있습니다.

<div className="py-5 flex justify-center">
  <Dialog
    kind="primary"
    triggerText="Edit profile"
    title="Edit profile"
    description="Make changes to your profile here. Click save when you're done."
    initialName="Pedro Duarte"
    initialUsername="@peduarte"
    cancelButtonText="Cancel"
    saveButtonText="Save changes"
  />
</div>

## Usage

기본적으로 **kind**, **triggerText**, **title**, **description**, **initialName**, **initialUsername**, **cancelButtonText**, **saveButtonText** prop을 사용해 다이얼로그를 설정합니다.

```tsx
import { Dialog } from '@aicody-ui/react';

export default function Page() {
  return <Dialog kind="primary" triggerText="Edit profile" title="Edit profile" description="Make changes to your profile here. Click save when you're done." initialName="Pedro Duarte" initialUsername="@peduarte" cancelButtonText="Cancel" saveButtonText="Save changes" />;
}
```

## API Reference

| Prop                 | Type                                                           | Default                           | Description                                                          |
| -------------------- | -------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------- |
| **kind**             | `"primary" \| "secondary" \| "outline" \| "plain" \| "cancel"` | "primary"                         | 트리거 버튼과 저장 버튼의 스타일 변형 (배경색, 텍스트 색상 등).      |
| **triggerText**      | `string`                                                       | "Edit profile"                    | 다이얼로그를 여는 버튼의 텍스트.                                     |
| **title**            | `string`                                                       | "Edit profile"                    | 다이얼로그의 제목.                                                   |
| **description**      | `string`                                                       | "Make changes to your profile..." | 다이얼로그의 설명 텍스트.                                            |
| **initialName**      | `string`                                                       | "Pedro Duarte"                    | 이름 입력 필드의 초기값.                                             |
| **initialUsername**  | `string`                                                       | "@peduarte"                       | 사용자 이름 입력 필드의 초기값. 생략 시 사용자 이름 필드 표시 안 함. |
| **initialEmail**     | `string`                                                       | undefined                         | 이메일 입력 필드의 초기값. 생략 시 이메일 필드 표시 안 함.           |
| **cancelButtonText** | `string`                                                       | "Cancel"                          | 취소 버튼의 텍스트.                                                  |
| **saveButtonText**   | `string`                                                       | "Save changes"                    | 저장 버튼의 텍스트.                                                  |

## Examples

### **kind**

**kind** prop을 사용하여 트리거 버튼과 저장 버튼의 스타일을 변경합니다.

<div className="flex gap-4 justify-center py-5">
  <Dialog kind="primary" triggerText="Primary" title="Primary Dialog" description="This is a primary styled dialog." />
  <Dialog kind="secondary" triggerText="Secondary" title="Secondary Dialog" description="This is a secondary styled dialog." />
  <Dialog kind="outline" triggerText="Outline" title="Outline Dialog" description="This is an outline styled dialog." />
  <Dialog kind="plain" triggerText="Plain" title="Plain Dialog" description="This is a plain styled dialog." />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Dialog kind="primary" triggerText="Primary" title="Primary Dialog" description="This is a primary styled dialog." />
  <Dialog kind="secondary" triggerText="Secondary" title="Secondary Dialog" description="This is a secondary styled dialog." />
  <Dialog kind="outline" triggerText="Outline" title="Outline Dialog" description="This is an outline styled dialog." />
  <Dialog kind="plain" triggerText="Plain" title="Plain Dialog" description="This is a plain styled dialog." />
</div>
```

### With Email

**initialEmail** prop을 사용하여 이메일 입력 필드를 추가합니다.

<div className="py-5 flex justify-center">
  <Dialog
    kind="primary"
    triggerText="Edit profile"
    title="Edit profile"
    description="Make changes to your profile."
    initialName="Freja Johnsen"
    initialUsername={undefined}
    initialEmail="freja@example.com"
    cancelButtonText="Cancel"
    saveButtonText="Save"
  />
</div>

```tsx
<Dialog kind="primary" triggerText="Edit profile" title="Edit profile" description="Make changes to your profile." initialName="Freja Johnsen" initialUsername={undefined} initialEmail="freja@example.com" cancelButtonText="Cancel" saveButtonText="Save" />
```

## Accessibility

Dialog 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **ARIA 속성**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`를 사용해 스크린 리더가 다이얼로그를 인식하도록 지원.
- **키보드 내비게이션**: **Escape** 키로 다이얼로그 닫기, **Tab** 키로 포커스 트랩(다이얼로그 내부 요소 간 이동) 지원.
- **포커스 관리**: 다이얼로그 열릴 때 이름 입력 필드에 자동 포커스.
- **외부 클릭 처리**: 다이얼로그 외부 클릭 시 닫기 기능.

## Notes

- 다이얼로그의 최대 너비는 448px로 설정되어 있으며, 중앙에 표시됩니다.
- **initialUsername** 또는 **initialEmail**이 제공되지 않으면 해당 입력 필드는 표시되지 않습니다.
- 저장 버튼 클릭 시 콘솔에 `{ name, username, email }` 객체가 출력됩니다.
- 취소 버튼은 항상 `kind="cancel"` 스타일을 사용하며, **kind** prop에 따라 조건부 스타일이 적용됩니다.
