---
id: switch
title: Switch 컴포넌트
sidebar_label: Switch
---

import React from 'react';
import { Switch } from '@aicody-ui/react';

Switch 컴포넌트는 토글 스위치 UI를 제공하여 사용자가 두 상태(켜짐/꺼짐)를 전환할 수 있도록 합니다. **kind** prop으로 스타일을 설정하고, **size** prop으로 크기를 조정하며, **label** prop으로 텍스트를 추가할 수 있습니다. **checked**와 **onCheckedChange**를 사용해 상태를 제어하고, **disabled** prop으로 비활성화할 수 있습니다. Tailwind CSS를 기반으로 스타일링되며, ARIA 속성과 키보드 내비게이션을 지원해 접근성을 보장합니다.

<div className="py-5 flex gap-4 justify-center">
  <Switch kind="primary" size="md" label="Toggle Switch" />
</div>

## Usage

기본적으로 **kind**, **size**, **label** prop을 사용해 스위치를 설정합니다.

```tsx
import { Switch } from '@aicody-ui/react';

export default function Page() {
  return <Switch kind="primary" size="md" label="Toggle Switch" />;
}
```

## Controlled Switch

**checked**와 **onCheckedChange** prop을 사용하여 스위치의 상태를 제어할 수 있습니다.

```tsx
import { useState } from 'react';
import { Switch } from '@aicody-ui/react';

export default function ControlledSwitch() {
  const [checked, setChecked] = useState(false);

  return <Switch kind="primary" size="md" label="Controlled Switch" checked={checked} onCheckedChange={(checked) => setChecked(checked)} />;
}
```

## API Reference

| Prop                | Type                                                                     | Default   | Description                                                             |
| ------------------- | ------------------------------------------------------------------------ | --------- | ----------------------------------------------------------------------- |
| **size**            | `"sm" \| "md" \| "lg"`                                                   | "md"      | 스위치의 크기 (sm: 4x7, md: 5x9, lg: 6x11, 단위: rem).                  |
| **kind**            | `"primary" \| "secondary" \| "plain"`                                    | "primary" | 스위치의 스타일 변형 (포커스 링 색상, 체크 시 배경 등).                 |
| **checked**         | `boolean`                                                                | false     | 스위치의 선택 상태. 제어 컴포넌트에서 사용.                             |
| **onCheckedChange** | `(checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void` | undefined | 체크 상태 변경 시 호출되는 이벤트 핸들러.                               |
| **className**       | `string`                                                                 | undefined | 추가적인 Tailwind CSS 클래스 또는 커스텀 스타일.                        |
| **label**           | `string`                                                                 | undefined | 스위치 옆에 표시할 라벨 텍스트.                                         |
| **id**              | `string`                                                                 | undefined | 스위치의 고유 ID. 지정하지 않으면 자동 생성됨.                          |
| **disabled**        | `boolean`                                                                | false     | 스위치를 비활성화 상태로 설정. 비활성화 시 투명도가 낮아지고 동작 차단. |

> **참고**: `Switch` 컴포넌트는 HTML `<input type="checkbox">` 요소의 모든 표준 속성(예: **aria-label**, **name**)을 지원합니다.

## Examples

### **kind**

**kind** prop을 사용하여 스위치의 스타일을 변경합니다.

<div className="flex gap-4 justify-center py-5">
  <Switch kind="primary" label="Primary" />
  <Switch kind="secondary" label="Secondary" />
  <Switch kind="plain" label="Plain" />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Switch kind="primary" label="Primary" />
  <Switch kind="secondary" label="Secondary" />
  <Switch kind="plain" label="Plain" />
</div>
```

### **size**

**size** prop을 사용하여 스위치의 크기를 조정합니다.

<div className="flex gap-4 justify-center py-5">
  <Switch size="sm" label="Small" />
  <Switch size="md" label="Medium" />
  <Switch size="lg" label="Large" />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Switch size="sm" label="Small" />
  <Switch size="md" label="Medium" />
  <Switch size="lg" label="Large" />
</div>
```

### States

**checked**와 **disabled** prop을 사용하여 스위치의 상태를 설정합니다.

<div className="flex gap-4 justify-center py-5">
  <Switch checked label="Checked" />
  <Switch disabled label="Disabled" />
  <Switch disabled checked label="Disabled & Checked" />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Switch checked label="Checked" />
  <Switch disabled label="Disabled" />
  <Switch disabled checked label="Disabled & Checked" />
</div>
```

### Custom Styling

**className** prop을 사용하여 커스텀 스타일을 적용할 수 있습니다.

<div className="py-5 flex justify-center">
  <Switch
    kind="primary"
    label="Custom Switch"
    className="focus:ring-red-500 bg-gray-500 checked:bg-green-500"
  />
</div>

```tsx
<Switch kind="primary" label="Custom Switch" className="focus:ring-red-500 bg-green-500 checked:bg-green-500" />
```

## Accessibility

Switch 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **ARIA 속성**: `aria-checked`, `aria-label`을 사용해 스크린 리더가 상태를 인식하도록 지원.
- **포커스 관리**: `focus:outline-none`, `focus:ring-2` 스타일로 키보드 포커스 상태를 시각적으로 표시.
- **키보드 내비게이션**: `Space` 키로 체크 상태를 토글 가능.
- **비활성화 상태**: **disabled** 상태에서 동작과 포인터 이벤트 차단.

## Notes

- 스위치는 제어 컴포넌트(**checked**, **onCheckedChange**)와 비제어 컴포넌트(**defaultChecked**)를 모두 지원합니다.
- **kind**에 따라 체크 시 배경색이 변경됩니다 (`primary`: `bg-primary-main`, `secondary`: `bg-secondary-main`, `plain`: `bg-brand-black`).
- **size**에 따라 스위치와 썸(thumb)의 크기 및 이동 거리가 조정됩니다.
- 라벨 텍스트는 **size**에 따라 폰트 크기가 달라집니다 (`sm`: `text-xs`, `md`: `text-sm`, `lg`: `text-base`).
