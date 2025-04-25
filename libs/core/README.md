# Aicody UI Core

`@aicody-ui/core`는 Aicody UI의 스타일링 기반을 제공하는 코어 라이브러리입니다. Tailwind CSS를 기반으로 테마, 색상, 미디어 쿼리, 반경, 간격, 타이포그래피 등을 정의합니다.

## 디렉토리 구조

- **src/config.ts**: Tailwind CSS 설정을 정의합니다.
- **src/theme**: 테마 관련 유틸리티(색상, 미디어 쿼리, 반경, 간격, 타이포그래피)를 포함합니다.
- **src/types**: 스타일링과 변형 타입을 정의합니다.

## 설치

`aicody-ui` 루트 디렉토리에서 의존성을 설치한 후 빌드하세요:

```bash
pnpm install
nx build core
```

## 사용법

`@aicody-ui/core`는 `libs/react` 컴포넌트에서 내부적으로 사용됩니다. 직접 사용하려면 테마 값을 임포트하여 Tailwind CSS 설정에 통합할 수 있습니다:

```ts
import { colors } from '@aicody-ui/core';

console.log(colors.primary.main); // '#3b82f6'
```

## 주요 기능

- **색상**: `colors.ts`에서 정의된 색상 팔레트(`primary`, `secondary`, `brand` 등)를 제공합니다.
- **미디어 쿼리**: `media.ts`에서 반응형 디자인을 위한 미디어 쿼리를 정의합니다.
- **반경, 간격, 타이포그래피**: `radii.ts`, `spacing.ts`, `typography.ts`에서 스타일링 유틸리티를 제공합니다.

## 테스트

```bash
nx test core
```

## 기여

1. `src/theme` 디렉토리에서 새로운 테마 값을 추가하거나 기존 값을 수정하세요.
2. 변경 사항을 테스트한 후 PR을 제출하세요.

## 라이선스

MIT License