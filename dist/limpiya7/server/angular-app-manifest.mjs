
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12060, hash: '626b36caefa9c493e93af0b9bf664c049e7c7565fde30d773f95e002930015ad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11409, hash: 'dea03229598c99f0eceec18b31daa0e28882f9bb48fb5bd237c23ccf6df0ead1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35754, hash: 'd81254af5f8be8ceeeffb1669c6bdfb48b57008ae8d274ed76642d280fc5d9b7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-34GAZPJ3.css': {size: 139804, hash: '1Crxz/hlGeY', text: () => import('./assets-chunks/styles-34GAZPJ3_css.mjs').then(m => m.default)}
  },
};
