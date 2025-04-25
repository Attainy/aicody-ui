---
id: checkbox
title: Checkbox 컴포넌트
sidebar_label: Checkbox
---

import React from 'react';
import { Checkbox } from '@aicody-ui/react';

Checkbox 컴포넌트는 사용자 입력을 위한 체크박스 UI를 제공합니다. **kind** prop으로 스타일을 설정하고, **size**와 **shape** prop으로 크기와 모양을 조정할 수 있습니다. **label**을 통해 텍스트를 추가하며, **disabled**, **checked**, **onChange** prop으로 상태와 동작을 제어할 수 있습니다. Tailwind CSS를 기반으로 스타일링되며, **className**을 통해 추가적인 스타일을 적용할 수 있습니다. ARIA 속성과 키보드 내비게이션을 지원해 접근성을 보장합니다.

<div className="py-5 flex gap-4 justify-center">
  <Checkbox kind="primary" size="md" label="Check me" />
</div>

## Usage

기본적으로 **kind**, **size**, **label** prop을 사용해 체크박스를 설정합니다.

```tsx
import { Checkbox } from '@aicody-ui/react';

export default function Page() {
  return <Checkbox kind="primary" size="md" label="Check me" />;
}
```

## Controlled Checkbox

**checked**와 **onChange** prop을 사용하여 체크박스의 상태를 제어할 수 있습니다.

```tsx
import { useState } from 'react';
import { Checkbox } from '@aicody-ui/react';

export default function ControlledCheckbox() {
  const [checked, setChecked] = useState(false);

  return <Checkbox kind="primary" size="md" label="Controlled Checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
}
```

## API Reference

| Prop          | Type                                                   | Default   | Description                                                               |
| ------------- | ------------------------------------------------------ | --------- | ------------------------------------------------------------------------- |
| **kind**      | `"primary" \| "secondary" \| "outline" \| "plain"`     | "primary" | 체크박스의 스타일 변형 (포커스 링 색상, 체크 시 배경 등).                 |
| **size**      | `"sm" \| "md" \| "lg"`                                 | "md"      | 체크박스의 크기 (sm: 16px, md: 20px, lg: 24px).                           |
| **shape**     | `"rounded" \| "square"`                                | "rounded" | 체크박스의 모양 (둥근 모서리 또는 직각).                                  |
| **label**     | `React.ReactNode`                                      | undefined | 체크박스 옆에 표시할 라벨 콘텐츠.                                         |
| **className** | `string`                                               | undefined | 추가적인 Tailwind CSS 클래스 또는 커스텀 스타일.                          |
| **disabled**  | `boolean`                                              | false     | 체크박스를 비활성화 상태로 설정. 비활성화 시 투명도가 낮아지고 동작 차단. |
| **checked**   | `boolean`                                              | false     | 체크박스의 선택 상태. 제어 컴포넌트에서 사용.                             |
| **onChange**  | `(event: React.ChangeEvent<HTMLInputElement>) => void` | undefined | 체크 상태 변경 시 호출되는 이벤트 핸들러.                                 |

> **참고**: `Checkbox` 컴포넌트는 HTML `<input type="checkbox">` 요소의 모든 표준 속성(예: **id**, **aria-label**)을 지원합니다.

## Examples

### **kind**

**kind** prop을 사용하여 체크박스의 스타일을 변경합니다.

<div className="flex gap-4 justify-center py-5">
  <Checkbox kind="primary" label="Primary" />
  <Checkbox kind="secondary" label="Secondary" />
  <Checkbox kind="outline" label="Outline" />
  <Checkbox kind="plain" label="Plain" />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Checkbox kind="primary" label="Primary" />
  <Checkbox kind="secondary" label="Secondary" />
  <Checkbox kind="outline" label="Outline" />
  <Checkbox kind="plain" label="Plain" />
</div>
```

### **size**

**size** prop을 사용하여 체크박스의 크기를 조정합니다.

<div className="flex gap-4 justify-center py-5">
  <Checkbox size="sm" label="Small" />
  <Checkbox size="md" label="Medium" />
  <Checkbox size="lg" label="Large" />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Checkbox size="sm" label="Small" />
  <Checkbox size="md" label="Medium" />
  <Checkbox size="lg" label="Large" />
</div>
```

### **shape**

**shape** prop을 사용하여 체크박스의 모양을 변경합니다.

<div className="flex gap-4 justify-center py-5">
  <Checkbox shape="rounded" label="Rounded" />
  <Checkbox shape="square" label="Square" />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Checkbox shape="rounded" label="Rounded" />
  <Checkbox shape="square" label="Square" />
</div>
```

### States

**checked**와 **disabled** prop을 사용하여 체크박스의 상태를 설정합니다.

<div className="flex gap-4 justify-center py-5">
  <Checkbox checked label="Checked" />
  <Checkbox disabled label="Disabled" />
  <Checkbox disabled checked label="Disabled & Checked" />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Checkbox checked label="Checked" />
  <Checkbox disabled label="Disabled" />
  <Checkbox disabled checked label="Disabled & Checked" />
</div>
```

### Custom Styling

**className** prop을 사용하여 커스텀 스타일을 적용할 수 있습니다.

<div className="py-5 flex justify-center">
  <Checkbox
    kind="primary"
    label="Custom Checkbox"
    className="border-green-500 checked:bg-green-500 checked:border-green-500 focus-visible:ring-green-500"
  />
</div>

```tsx
<Checkbox kind="primary" label="Custom Checkbox" className="border-green-500 checked:bg-green-500 checked:border-green-500 focus-visible:ring-green-500" />
```

## Accessibility

Checkbox 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **ARIA 속성**: `aria-checked`, `aria-label`을 사용해 스크린 리더가 상태를 인식하도록 지원.
- **포커스 관리**: `focus:outline-none`, `focus-visible:ring` 스타일로 키보드 포커스 상태를 시각적으로 표시.
- **키보드 내비게이션**: **Space** 키로 체크 상태를 토글 가능.
- **비활성화 상태**: **disabled** 상태에서 동작과 포인터 이벤트 차단.

## Notes

- 체크박스는 제어 컴포넌트(**checked**, **onChange**)와 비제어 컴포넌트(**defaultChecked**) 모두 지원합니다.
- **kind**가 **outline**일 경우 체크 시 배경이 채워지지 않고 체크 아이콘만 표시됩니다.
- 체크 아이콘은 Tailwind CSS의 **before** 가상 요소로 구현되며, **kind**에 따라 색상이 변경됩니다.
