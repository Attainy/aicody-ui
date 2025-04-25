---
id: profile-photo
title: ProfilePhoto 컴포넌트
sidebar_label: ProfilePhoto
---

import React from 'react';
import { ProfilePhoto } from '@aicody-ui/react';
import defaultProfilePhoto from './defaultProfilePhoto.png';

ProfilePhoto 컴포넌트는 원형 프로필 사진을 표시하는 UI를 제공합니다. **size** prop으로 크기를 설정하고, **src**와 **alt** prop으로 이미지 소스와 대체 텍스트를 지정할 수 있습니다. **src**가 제공되지 않으면 기본 이미지가 표시됩니다. Tailwind CSS를 기반으로 스타일링되며, **className**을 통해 추가적인 스타일을 적용할 수 있습니다. 이미지는 `object-cover` 스타일로 컨테이너를 채우며, 원형으로 표시됩니다.

<div className="py-5 flex justify-center">
  <ProfilePhoto size="md" src={defaultProfilePhoto} alt="Profile photo" />
</div>

## Usage

기본적으로 **size** prop을 사용해 프로필 사진의 크기를 설정합니다. **src**와 **alt** prop은 선택적으로 지정할 수 있습니다.

```tsx
import { ProfilePhoto } from '@aicody-ui/react';
import defaultProfilePhoto from './defaultProfilePhoto.png';

export default function Page() {
  return <ProfilePhoto size="md" src={defaultProfilePhoto} alt="Profile photo" />;
}
```

## API Reference

| Prop          | Type                   | Default             | Description                                                    |
| ------------- | ---------------------- | ------------------- | -------------------------------------------------------------- |
| **size**      | `"sm" \| "md" \| "lg"` | "md"                | 프로필 사진의 크기 (sm: 8x8, md: 10x10, lg: 14x14, 단위: rem). |
| **src**       | `string`               | defaultProfilePhoto | 이미지 소스 URL. 지정하지 않으면 기본 이미지가 표시됨.         |
| **alt**       | `string`               | "Profile photo"     | 이미지의 대체 텍스트. 지정하지 않으면 기본값이 사용됨.         |
| **className** | `string`               | undefined           | 추가적인 Tailwind CSS 클래스 또는 커스텀 스타일.               |

> **참고**: `ProfilePhoto` 컴포넌트는 HTML `<img>` 요소의 모든 표준 속성(예: **onClick**, **title**)을 지원합니다.

## Examples

### Image

**src** prop을 사용하여 커스텀 이미지를 표시합니다.

<div className="py-5 flex justify-center">
  <ProfilePhoto
    size="md"
    src="https://cdn.pixabay.com/photo/2023/03/31/05/52/avatar-7889246_1280.jpg"
    alt="Profile photo"
  />
</div>

```tsx
<ProfilePhoto size="md" src="https://cdn.pixabay.com/photo/2023/03/31/05/52/avatar-7889246_1280.jpg" alt="Profile photo" />
```

### Default

**src**를 지정하지 않으면 기본 이미지가 표시됩니다.

<div className="py-5 flex justify-center">
  <ProfilePhoto size="md" />
</div>

```tsx
<ProfilePhoto size="md" />
```

### **size**

**size** prop을 사용하여 프로필 사진의 크기를 조정합니다.

<div className="flex gap-4 justify-center py-5">
  <ProfilePhoto size="sm" src={defaultProfilePhoto} alt="Small profile photo" />
  <ProfilePhoto size="md" src={defaultProfilePhoto} alt="Medium profile photo" />
  <ProfilePhoto size="lg" src={defaultProfilePhoto} alt="Large profile photo" />
</div>

```tsx
<div className="flex gap-4 justify-center">
  <ProfilePhoto size="sm" src={defaultProfilePhoto} alt="Small profile photo" />
  <ProfilePhoto size="md" src={defaultProfilePhoto} alt="Medium profile photo" />
  <ProfilePhoto size="lg" src={defaultProfilePhoto} alt="Large profile photo" />
</div>
```

### Custom Styling

**className** prop을 사용하여 커스텀 스타일을 적용할 수 있습니다.

<div className="py-5 flex justify-center">
  <ProfilePhoto
    size="md"
    src={defaultProfilePhoto}
    alt="Custom profile photo"
    className="border-2 border-blue-500 shadow-lg"
  />
</div>

```tsx
<ProfilePhoto size="md" src={defaultProfilePhoto} alt="Custom profile photo" className="border-2 border-blue-500 shadow-lg" />
```

## Accessibility

ProfilePhoto 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **ARIA 지원**: **alt** prop을 통해 이미지의 대체 텍스트를 제공하여 스크린 리더가 콘텐츠를 인식하도록 지원.
- **포커스 관리**: HTML `<img>` 요소의 표준 속성(예: **tabIndex**)을 지원하여 키보드 내비게이션 가능.

## Notes

- 기본 이미지(`defaultProfilePhoto.png`)는 흰색 선으로 그려진 사람 아이콘(원형 머리와 어깨 형태)이며, 배경은 주황색에서 분홍색으로 그라디언트가 적용된 스타일입니다.
- 이미지는 `object-cover` 스타일로 컨테이너를 채우며, 항상 원형(`rounded-full`)으로 표시됩니다.
- 컨테이너의 배경색은 `bg-brand-gray`로 설정되어 있습니다.
- **size**에 따라 크기와 텍스트 크기가 조정됩니다 (`sm`: 8x8rem, `md`: 10x10rem, `lg`: 14x14rem).
