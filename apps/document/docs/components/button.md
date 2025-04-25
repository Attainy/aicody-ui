---
id: button
title: Button 컴포넌트
sidebar_label: Button
---

import React from 'react';
import { Button } from '@aicody-ui/react';

Button 컴포넌트는 다양한 스타일과 크기의 버튼 UI를 제공합니다. **kind** prop으로 버튼의 스타일(예: primary, secondary)을 설정하고, **size** prop으로 크기를 조정할 수 있습니다. Tailwind CSS를 기반으로 스타일링되며, 접근성을 위해 ARIA 속성과 포커스 상태를 지원합니다. **className**을 사용해 추가적인 스타일을 적용할 수 있으며, HTML 버튼의 모든 표준 속성(예: **onClick**, **disabled**)을 지원합니다.

<div className="flex gap-4 justify-center py-5">
  <Button kind="primary">Primary</Button>
  <Button kind="secondary">Secondary</Button>
  <Button kind="outline">Outline</Button>
  <Button kind="plain">Plain</Button>
</div>

## Usage

기본적으로 **kind**와 **size** prop을 사용해 버튼을 설정합니다.

```tsx
import { Button } from '@aicody-ui/react';

export default function Page() {
  return (
    <Button kind="primary" size="md">
      Click me
    </Button>
  );
}
```

## API Reference

| Prop          | Type                                                           | Default   | Description                                                                    |
| ------------- | -------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------ |
| **kind**      | `"primary" \| "secondary" \| "outline" \| "plain" \| "cancel"` | "primary" | 버튼의 스타일 변형 (배경색, 텍스트 색상, 테두리 등).                           |
| **size**      | `"sm" \| "md" \| "lg"`                                         | "md"      | 버튼의 크기 (패딩, 폰트 크기 등).                                              |
| **className** | `string`                                                       | undefined | 추가적인 Tailwind CSS 클래스 또는 커스텀 스타일.                               |
| **disabled**  | `boolean`                                                      | false     | 버튼을 비활성화 상태로 설정. 비활성화 시 투명도가 낮아지고 포인터 이벤트 차단. |
| **onClick**   | `(event: React.MouseEvent<HTMLButtonElement>) => void`         | undefined | 버튼 클릭 시 호출되는 이벤트 핸들러.                                           |

> **참고**: **Button** 컴포넌트는 HTML `<button>` 요소의 모든 표준 속성(예: **type**, **aria-label**)을 지원합니다.

## Examples

### **kind**

**kind** prop을 사용하여 버튼의 스타일을 변경합니다.

<div className="flex gap-4 justify-center py-5">
  <Button kind="primary">Primary</Button>
  <Button kind="secondary">Secondary</Button>
  <Button kind="outline">Outline</Button>
  <Button kind="plain">Plain</Button>
  <Button kind="cancel">Cancel</Button>
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Button kind="primary">Primary</Button>
  <Button kind="secondary">Secondary</Button>
  <Button kind="outline">Outline</Button>
  <Button kind="plain">Plain</Button>
  <Button kind="cancel">Cancel</Button>
</div>
```

### **size**

**size** prop을 사용하여 버튼의 크기를 조정합니다.

<div className="flex gap-4 justify-center py-5">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>
```

### Disabled State

**disabled** prop을 사용하여 버튼을 비활성화할 수 있습니다.

<div className="flex gap-4 justify-center py-5">
  <Button kind="primary" disabled>Primary (Disabled)</Button>
  <Button kind="outline" disabled>Outline (Disabled)</Button>
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Button kind="primary" disabled>
    Primary (Disabled)
  </Button>
  <Button kind="outline" disabled>
    Outline (Disabled)
  </Button>
</div>
```

### Custom Styling

**className** prop을 사용하여 커스텀 스타일을 적용할 수 있습니다.

<div className="flex gap-4 justify-center py-5">
  <Button kind="primary" className="bg-red-500 hover:bg-red-600">Custom Primary</Button>
  <Button kind="outline" className="text-green-600 border-green-600">Custom Outline</Button>
</div>

```tsx
<div className="flex gap-4 justify-center">
  <Button kind="primary" className="bg-red-500 hover:bg-red-600">
    Custom Primary
  </Button>
  <Button kind="outline" className="text-green-600 border-green-600">
    Custom Outline
  </Button>
</div>
```

## Accessibility

Button 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **포커스 관리**: `focus:outline-none`과 `focus:ring` 스타일로 키보드 포커스 상태를 시각적으로 표시.
- **ARIA 지원**: HTML 버튼 속성(예: `aria-label`, `aria-disabled`)을 통해 스크린 리더 지원.
- **키보드 내비게이션**: **Enter**와 **Space** 키로 버튼을 활성화 가능.
- **비활성화 상태**: `disabled` 상태에서 포인터 이벤트와 키보드 상호작용 차단.
