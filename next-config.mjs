// @ts-check

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
  optimizeFonts: true,
  swcMinify: true,
  outputFileTracing: true,
  analyticsId: undefined
};

export default withNextIntl(config);