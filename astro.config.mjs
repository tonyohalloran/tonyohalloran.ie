// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://tonyohalloran.ie',
  // TEMP: subpath deploy at tonyohalloran.github.io/tonyohalloran.ie while the custom domain is stuck
  base: process.env.SITE_BASE ?? '/',
  // keep whitespace: the compressor eats the space before inline <a> tags
  // ("at<a>Andromede</a>"), and these pages are tiny anyway
  compressHTML: false,
});
