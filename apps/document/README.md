# Aicody UI Document

`apps/document`는 Aicody UI의 공식 문서 사이트입니다. Docusaurus를 사용하여 `libs/react`와 `libs/core`에서 제공하는 컴포넌트와 유틸리티의 사용법을 설명합니다.

## 디렉토리 구조

- **docs**: 문서 파일(MDX)과 정적 리소스(이미지 등)를 포함합니다.
  - `components`: 컴포넌트 문서(Accordion, Button, Dialog 등).
  - `getting-started`: 설치 및 사용 가이드.
  - `introduction`: 프로젝트 소개, 기능, 철학 등.
- **src**: 커스텀 페이지와 컴포넌트(예: `HomepageFeatures`).
- **static**: 정적 파일(이미지, favicon 등).
- **build**: 빌드된 결과물(HTML, CSS, JS 등).

## 설치

`aicody-ui` 루트 디렉토리에서 의존성을 설치한 후 빌드하세요:

```bash
pnpm install
nx build document
```

## 실행

문서 사이트를 실행하려면:

```bash
nx serve document
```

브라우저에서 `http://localhost:3000/aicody-ui`로 접속하세요.

## 문서 작성

1. **컴포넌트 문서 추가**:
   - `docs/components` 디렉토리에 새로운 MDX 파일(예: `new-component.md`)을 추가하세요.
   - `sidebars.ts` 파일에서 사이드바에 추가:
     ```ts
     module.exports = {
       sidebar: [
         {
           type: 'category',
           label: 'Components',
           items: ['components/new-component'],
         },
       ],
     };
     ```

2. **빌드 및 확인**:
   ```bash
   nx build document
   nx serve document
   ```

## 주요 문서

- **Components**: Accordion, AlertDialog, AspectRatio, Button, Checkbox, Collapsible, Command, ContextMenu, Dialog, ProfilePhoto, Switch.
- **Getting Started**: 설치 가이드, Tailwind CSS 설정, 기본 사용법.
- **Introduction**: 프로젝트 소개, 기능, 모노레포 구조, 철학.

## 기여

1. `docs` 디렉토리에서 새로운 문서를 추가하거나 기존 문서를 수정하세요.
2. 변경 사항을 테스트한 후 PR을 제출하세요.

## 라이선스

MIT License