import { cosmiconfigSync } from 'cosmiconfig';

export interface AicodyConfig {
  stylingEngine: 'tailwind' | 'emotion' | 'vanilla';
}

const explorer = cosmiconfigSync('aicody', {
  searchPlaces: ['aicody.config.js', 'aicody.config.cjs', 'aicody.config.ts'],
});

const result = explorer.search();
export const config: AicodyConfig = result?.config || {
  stylingEngine: 'tailwind',
};
