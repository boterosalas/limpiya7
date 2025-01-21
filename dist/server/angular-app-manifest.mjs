
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/layouts/home/home.component.ts": [
    {
      "path": "chunk-DSF7KGKF.js",
      "dynamicImport": false
    }
  ],
  "src/app/layouts/about-us/about-us.component.ts": [
    {
      "path": "chunk-2ALKHGN3.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 11347, hash: 'd2aebdde2882740604007e11dc3891edd2595462946196872f2b29160bfff150', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11235, hash: '14ee84f338c8f5b96590bfac2267946e3bf4a00e8bbf789d614004fa25a2e67f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CHY24Z2D.css': {size: 149136, hash: 'WYGTDyuZdL4', text: () => import('./assets-chunks/styles-CHY24Z2D_css.mjs').then(m => m.default)}
  },
};
