import { tv } from 'tailwind-variants';

export const aspectRatioVariants = tv({
  variants: {
    ratio: {
      square: 'aspect-[1/1]', // 1:1
      video: 'aspect-[16/9]', // 16:9
      photo: 'aspect-[4/3]', // 4:3
    },
  },
  defaultVariants: {
    ratio: 'video',
  },
});
