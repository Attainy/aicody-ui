# Aicody UI React

`@aicody-ui/react`는 Aicody UI의 React 컴포넌트 라이브러리입니다. Tailwind CSS를 기반으로 스타일링된 다양한 UI 컴포넌트를 제공하며, 접근성과 유연성을 중점으로 설계되었습니다.

## 디렉토리 구조

- **src/components**: React 컴포넌트(Accordion, Button, Dialog 등)를 포함합니다.
- **src/utils**: 컴포넌트에서 사용하는 유틸리티 함수(예: `mergeProps`, `mergeRef`)를 포함합니다.
- **dist**: 빌드된 결과물.

## 컴포넌트 목록

- **Accordion**: 확장/축소 가능한 아코디언 UI.
- **AlertDialog**: 확인/취소 선택지를 제공하는 모달 다이얼로그.
- **AspectRatio**: 고정된 비율의 컨테이너.
- **Button**: 다양한 스타일의 버튼.
- **Checkbox**: 체크박스 입력.
- **Collapsible**: 확장/축소 가능한 콘텐츠 영역.
- **Command**: 검색 가능한 명령 목록.
- **ContextMenu**: 우클릭 컨텍스트 메뉴.
- **Dialog**: 사용자 입력을 받는 모달 다이얼로그.
- **ProfilePhoto**: 원형 프로필 사진.
- **Switch**: 토글 스위치.

## 설치

`aicody-ui` 루트 디렉토리에서 의존성을 설치한 후 빌드하세요:

```bash
pnpm install
nx build react
```

## 사용법

컴포넌트를 임포트하여 사용하세요. 예를 들어, `Switch` 컴포넌트를 사용하는 방법은 다음과 같습니다:

```tsx
import { Switch } from '@aicody-ui/react';

function App() {
  return <Switch kind="primary" size="md" label="Toggle Switch" />;
}
```

자세한 사용법은 [문서 사이트](http://localhost:3000/aicody-ui) 또는 Storybook에서 확인하세요.

## Storybook

컴포넌트를 시각적으로 테스트하려면 Storybook을 실행하세요:

```bash
nx storybook react
```

## 테스트

```bash
nx test react
```

## 기여

1. `src/components` 디렉토리에서 새로운 컴포넌트를 추가하거나 기존 컴포넌트를 수정하세요.
2. `src/components/*/index.ts` 파일에서 컴포넌트를 내보내세요.
3. Storybook 스토리와 문서를 업데이트하세요.
4. 변경 사항을 테스트한 후 PR을 제출하세요.

## 라이선스

MIT License