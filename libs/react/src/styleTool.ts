// libs/react/src/styleTool.ts
// aicody.config.cjs 파일 위치에 맞춰 경로 조정
import config from '../aicody.config.cjs';
export const STYLE_TOOL = config.styleTool as
  | 'tailwind'
  | 'emotion'
  | 'vanilla';
