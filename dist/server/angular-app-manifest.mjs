
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
    'index.csr.html': {size: 11347, hash: 'd02048ec36af27ca5d2dbde760697afd99c38acac5435a65a4bf994666dbfd46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11235, hash: '77879f645fb1d8efc18b8c9b4246f667b28adf17d25ee0ceb7a13b5a1aa4ed6f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CHY24Z2D.css': {size: 149136, hash: 'WYGTDyuZdL4', text: () => import('./assets-chunks/styles-CHY24Z2D_css.mjs').then(m => m.default)}
  },
};
