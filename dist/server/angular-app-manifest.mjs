
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
    'index.csr.html': {size: 11347, hash: 'cf711da4c1ab9157b983f38b41af9913f3ae507b6226220d5015c30357e03559', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11235, hash: '03a82a02d7c57a16dc243046157fe3d5fb1e63c98bbe308ac05460ec33843e42', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CHY24Z2D.css': {size: 149136, hash: 'WYGTDyuZdL4', text: () => import('./assets-chunks/styles-CHY24Z2D_css.mjs').then(m => m.default)}
  },
};
