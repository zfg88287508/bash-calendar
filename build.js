const esbuild = require('esbuild')
const { version } = require('./package.json')

esbuild.build({
  entryPoints: ['src/index.js'],
  sourcemap: false,
  bundle: true,
  define: { 'process.env.APP_VERSION': `'${version}'` },
  platform: 'node',
  target: 'node10',
  minify: true,
  // external: ['chalk'],
  outfile: 'index.js'
})
