<p align="center">
  <img width="255" alt="Image" src="https://github.com/user-attachments/assets/deb2d429-f4d0-4143-8c8d-87bf7bcfc076" />
</p>

<h1 align="center">Aicody UI</h1>

<p align="center">
  <strong>현대적이고 접근성 높은 React 컴포넌트 라이브러리</strong><br/>
  Tailwind CSS를 기반으로 스타일링된 다양한 UI 컴포넌트를 제공하며, <br />
  모노레포 구조를 통해 효율적인 개발과 유지보수를 지원합니다.
</p>

<div style="border: 1px solid #ddd; padding: 10px; max-width: 500px;">
  <h3><a href="https://attainy.github.io/aicody-ui/">📘 공식 기술 문서</a></h3>
  <a href="https://attainy.github.io/aicody-ui/">https://attainy.github.io/aicody-ui/</a>
</div>

<div style="border: 1px solid #ddd; padding: 10px; max-width: 500px;">
  <h3><a href="https://attainy.github.io/aicody-ui/storybook">🎮 데모 체험하기</a></h3>
  <a href="https://attainy.github.io/aicody-ui/storybook">https://attainy.github.io/aicody-ui/storybook</a>
</div>


---

## 디렉토리 구조

- **apps/document**: Docusaurus를 사용한 문서 사이트. 컴포넌트 사용법과 설치 가이드를 제공합니다.
- **libs/core**: Tailwind CSS 기반의 테마, 색상, 스타일링 유틸리티를 정의합니다.
- **libs/react**: React 기반 UI 컴포넌트(Accordion, Button, Dialog 등)를 제공합니다.
- **storybook-static**: Storybook으로 빌드된 컴포넌트 시각화 도구.

<br/>

## 설치

1. **의존성 설치**:

   ```bash
   pnpm install
   ```

2. **빌드**:

   ```bash
   pnpm nx run @aicody-ui/core:build
   pnpm nx run @aicody-ui/react:build
   pnpm run docs:build
   ```

3. **Storybook 실행**:

   ```bash
   pnpm nx run storybook
   ```

4. **문서 사이트 실행**:
   ```bash
   pnpm run docs:start
   ```
<br/>

## 🎨 사용법

`libs/react`에서 제공하는 컴포넌트를 사용할 수 있습니다. 예를 들어, `Button` 컴포넌트를 사용하는 방법은 다음과 같습니다:

```tsx
import { Button } from "@aicody-ui/react";

function App() {
  return <Button kind="primary">Click me</Button>;
}
```

자세한 사용법은 [문서 사이트](http://localhost:3000/aicody-ui)에서 확인하세요.

<br/>

## ✨ 주요 기능

- **컴포넌트**: Accordion, AlertDialog, AspectRatio, Button, Checkbox, Collapsible, Command, ContextMenu, Dialog, ProfilePhoto, Switch 등 다양한 UI 컴포넌트를 제공합니다.
- **스타일링**: Tailwind CSS와 `tailwind-variants`를 사용하여 유연하고 커스터마이징 가능한 스타일을 지원합니다.
- **접근성**: ARIA 속성과 키보드 내비게이션을 지원하여 접근성을 보장합니다.
- **모노레포**: Nx를 사용하여 코어와 React 라이브러리를 효율적으로 관리합니다.

<br/>

## 🤝 기여

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


4. **PR 제출**:
   - 변경 사항을 커밋하고 푸시한 후 Pull Request를 생성하세요.

<br/>

## 📜 라이선스

