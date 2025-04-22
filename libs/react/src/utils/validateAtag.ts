// aicody-ui/libs/react/src/utils/validateAsTag.ts

/**
 * validateAsTag 함수는 asTag prop으로 전달된 값을 검증
 * - tag: 검증할 값 (unknown)
 * - allowedTags: 허용된 태그 목록 (예: ['a', 'div'])
 * - defaultTag: 허용되지 않을 때 사용할 기본 태그 (예: 'button')
 *
 * 만약 tag가 문자열이고 allowedTags에 포함되어 있으면 그대로 반환하고,
 * 그렇지 않으면 defaultTag를 반환
 *
 * 향후 여기에 추가 검증 로직이나 수정 로직을 쉽게 확장
 */
export function validateAsTag(
  tag: unknown,
  allowedTags: string[],
  defaultTag: string
): string {
  if (typeof tag === 'string' && allowedTags.includes(tag)) {
    return tag;
  } else {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `Invalid asTag "${tag}" provided. Falling back to "${defaultTag}".`
      );
    }
    return defaultTag;
  }
}
