---
id: aspect-ratio
title: AspectRatio 컴포넌트
sidebar_label: AspectRatio
---

import React from 'react';
import { AspectRatio } from '@aicody-ui/react';
import defaultAspectRatioImage from './defaultAspectRatio.jpg';

AspectRatio 컴포넌트는 고정된 비율의 컨테이너를 제공하여 이미지나 콘텐츠를 일관된 비율로 표시합니다. **ratio** prop으로 비율을 설정하고, **defaultImage** 또는 **children** prop으로 표시할 콘텐츠를 지정할 수 있습니다. Tailwind CSS를 기반으로 스타일링되며, **className**을 통해 추가적인 스타일을 적용할 수 있습니다. 최소 너비는 300px로 설정되어 있으며, 콘텐츠는 `object-cover` 스타일로 전체 영역을 채웁니다.

<div className="py-5 flex justify-center">
  <AspectRatio ratio="video" defaultImage={defaultAspectRatioImage} style={{ width: '300px' }} />
</div>

## Usage

기본적으로 **ratio**와 **defaultImage** prop을 사용해 비율과 이미지를 설정합니다.

```tsx
import { AspectRatio } from '@aicody-ui/react';
import defaultAspectRatioImage from './defaultAspectRatio.jpg';

export default function Page() {
  return <AspectRatio ratio="video" defaultImage={defaultAspectRatioImage} style={{ width: '300px' }} />;
}
```

## With Children

**children** prop을 사용하여 커스텀 콘텐츠를 표시할 수 있습니다. 이 경우 **defaultImage**는 무시됩니다.

```tsx
import { AspectRatio } from '@aicody-ui/react';

export default function Page() {
  return (
    <AspectRatio ratio="square" style={{ width: '300px' }}>
      <div className="h-full w-full bg-gray-200 flex items-center justify-center">Custom Content</div>
    </AspectRatio>
  );
}
```

## API Reference

| Prop             | Type                             | Default   | Description                                                                        |
| ---------------- | -------------------------------- | --------- | ---------------------------------------------------------------------------------- |
| **ratio**        | `"square" \| "video" \| "photo"` | "video"   | 컨테이너의 비율 (square: 1:1, video: 16:9, photo: 4:3).                            |
| **defaultImage** | `string`                         | undefined | 기본 이미지의 경로. **children**이 없으면 이 이미지가 표시됩니다.                  |
| **children**     | `React.ReactNode`                | undefined | 컨테이너 내부에 표시할 커스텀 콘텐츠. **children**이 있으면 **defaultImage** 무시. |
| **className**    | `string`                         | undefined | 추가적인 Tailwind CSS 클래스 또는 커스텀 스타일.                                   |

> **참고**: `AspectRatio` 컴포넌트는 HTML `<div>` 요소의 모든 표준 속성(예: **style**, **onClick**)을 지원합니다.

## Examples

### **ratio**

**ratio** prop을 사용하여 컨테이너의 비율을 변경합니다.

<div className="flex gap-4 justify-center py-5">
  <AspectRatio ratio="square" defaultImage={defaultAspectRatioImage} style={{ width: '200px' }} />
  <AspectRatio ratio="video" defaultImage={defaultAspectRatioImage} style={{ width: '200px' }} />
  <AspectRatio ratio="photo" defaultImage={defaultAspectRatioImage} style={{ width: '200px' }} />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <AspectRatio ratio="square" defaultImage={defaultAspectRatioImage} style={{ width: '200px' }} />
  <AspectRatio ratio="video" defaultImage={defaultAspectRatioImage} style={{ width: '200px' }} />
  <AspectRatio ratio="photo" defaultImage={defaultAspectRatioImage} style={{ width: '200px' }} />
</div>
```

### With Children

**children** prop을 사용하여 커스텀 콘텐츠를 표시합니다.

<div className="py-5 flex justify-center">
  <AspectRatio ratio="video" style={{ width: '300px' }}>
    <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-800">
      Custom Content
    </div>
  </AspectRatio>
</div>

```tsx
<AspectRatio ratio="video" style={{ width: '300px' }}>
  <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-800">Custom Content</div>
</AspectRatio>
```

### Without Children

**children**이 없는 경우 **defaultImage**가 표시됩니다.

<div className="py-5 flex justify-center">
  <AspectRatio ratio="photo" defaultImage={defaultAspectRatioImage} style={{ width: '300px' }} />
</div>

```tsx
<AspectRatio ratio="photo" defaultImage={defaultAspectRatioImage} style={{ width: '300px' }} />
```

### Custom Styling

**className** prop을 사용하여 커스텀 스타일을 적용할 수 있습니다.

<div className="py-5 flex justify-center">
  <AspectRatio
    ratio="square"
    defaultImage={defaultAspectRatioImage}
    className="border-2 border-blue-500 rounded-lg shadow-lg"
    style={{ width: '300px' }}
  />
</div>

```tsx
<AspectRatio ratio="square" defaultImage={defaultAspectRatioImage} className="border-2 border-blue-500 rounded-lg shadow-lg" style={{ width: '300px' }} />
```

## Notes

- 기본 이미지(**defaultAspectRatio.jpg**)는 Zenit 11 필름 카메라와 Kodak D-76 필름 통이 포함된 흑백 사진입니다.
- 컨테이너의 최소 너비는 300px로 설정되어 있으며, 이미지는 `object-cover` 스타일로 전체 영역을 채웁니다.
- **children**이 제공되지 않으면 **defaultImage**가 사용되며, 기본적으로 **defaultAspectRatio.jpg**가 적용됩니다.
