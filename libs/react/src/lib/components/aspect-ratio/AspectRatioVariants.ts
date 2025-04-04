// aicody-ui/libs/react/src/components/aspect-ratio/AspectRatioVariants.ts
import { tv } from 'tailwind-variants';

export const aspectRatioVariants = tv({
  base: 'relative w-full overflow-hidden',
  variants: {
    ratio: {
      square: 'aspect-square', // 1:1
      video: 'aspect-video', // 16:9
      photo: 'aspect-[4/3]',
    },
  },
  defaultVariants: {
    ratio: 'video',
  },
});
