# Aicody UI

Aicody UI는 현대적이고 접근성 높은 React 컴포넌트 라이브러리입니다. Tailwind CSS를 기반으로 스타일링된 다양한 UI 컴포넌트를 제공하며, 모노레포 구조를 통해 효율적인 개발과 유지보수를 지원합니다. 이 프로젝트는 `libs/core`와 `libs/react`로 구성된 코어 라이브러리와 `apps/document`에서 제공되는 문서를 포함합니다.

## 디렉토리 구조

- **apps/document**: Docusaurus를 사용한 문서 사이트. 컴포넌트 사용법과 설치 가이드를 제공합니다.
- **libs/core**: Tailwind CSS 기반의 테마, 색상, 스타일링 유틸리티를 정의합니다.
- **libs/react**: React 기반 UI 컴포넌트(Accordion, Button, Dialog 등)를 제공합니다.
- **storybook-static**: Storybook으로 빌드된 컴포넌트 시각화 도구.

## 설치

1. **의존성 설치**:

   ```bash
   pnpm install
   ```

2. **빌드**:

   ```bash
   nx build core
   nx build react
   nx build document
   ```

3. **Storybook 실행**:

   ```bash
   nx storybook react
   ```

4. **문서 사이트 실행**:
   ```bash
   nx serve document
   ```

## 사용법

`libs/react`에서 제공하는 컴포넌트를 사용할 수 있습니다. 예를 들어, `Button` 컴포넌트를 사용하는 방법은 다음과 같습니다:

```tsx
import { Button } from "@aicody-ui/react";

function App() {
  return <Button kind="primary">Click me</Button>;
}
```

자세한 사용법은 [문서 사이트](http://localhost:3000/aicody-ui)에서 확인하세요.

## 주요 기능

- **컴포넌트**: Accordion, AlertDialog, AspectRatio, Button, Checkbox, Collapsible, Command, ContextMenu, Dialog, ProfilePhoto, Switch 등 다양한 UI 컴포넌트를 제공합니다.
- **스타일링**: Tailwind CSS와 `tailwind-variants`를 사용하여 유연하고 커스터마이징 가능한 스타일을 지원합니다.
- **접근성**: ARIA 속성과 키보드 내비게이션을 지원하여 접근성을 보장합니다.
- **모노레포**: Nx를 사용하여 코어와 React 라이브러리를 효율적으로 관리합니다.

## 기여

1. **레포지토리 클론**:

   ```bash
   git clone <repository-url>
   cd aicody-ui
   ```

2. **의존성 설치**:

   ```bash
   pnpm install
   ```

3. **변경 사항 작성**:

   - `libs/react/src/components` 디렉토리에서 새로운 컴포넌트를 추가하거나 기존 컴포넌트를 수정하세요.
   - `apps/document/docs` 디렉토리에서 문서를 업데이트하세요.

4. **테스트**:

   ```bash
   nx test react
   ```

5. **PR 제출**:
   - 변경 사항을 커밋하고 푸시한 후 Pull Request를 생성하세요.

## 라이선스

MIT License
