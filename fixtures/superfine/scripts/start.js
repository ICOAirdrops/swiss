const browserSync = require('browser-sync').create();

browserSync.init({
  server: '.',
  files: [
    '*.{js,html,css}',
    'dist/*.{js,html,css}',
    'node_modules/swiss-element/dist/*'
  ],
});