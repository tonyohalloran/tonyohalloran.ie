// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tonyohalloran.ie',
  // keep whitespace: the compressor eats the space before inline <a> tags
  // ("at<a>Andromede</a>"), and these pages are tiny anyway
  compressHTML: false,
});
