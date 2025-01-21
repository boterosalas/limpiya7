
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/layouts/home/home.component.ts": [
    {
      "path": "chunk-KV4TCQQL.js",
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
    'index.csr.html': {size: 11347, hash: 'ebb71f55b6c9743c071a7581e388c29a532dbb69b1f928edb461855f3a538f67', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11235, hash: '773bc1571868bfaf321e6470473e560b0eba26356f9d25cc0cf723ce2f2ce64f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CHY24Z2D.css': {size: 149136, hash: 'WYGTDyuZdL4', text: () => import('./assets-chunks/styles-CHY24Z2D_css.mjs').then(m => m.default)}
  },
};
