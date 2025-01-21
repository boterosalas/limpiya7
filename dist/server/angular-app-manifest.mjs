
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/limpiya7/',
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
    'index.csr.html': {size: 11371, hash: '99463494d16d8706e1346c5b0f91b2604c688ace9ec183d2dc7d6a6b12b8470f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11259, hash: '38b6523b7f02e9c9e488890915d8debbfaa12540631593642afa0babac9ba1b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CHY24Z2D.css': {size: 149136, hash: 'WYGTDyuZdL4', text: () => import('./assets-chunks/styles-CHY24Z2D_css.mjs').then(m => m.default)}
  },
};
