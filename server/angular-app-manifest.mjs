
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://mrgaurav963.github.io/kstrong/portal',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/kstrong/portal"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 533, hash: '8e93d6d499068607ace34ab56fb1c16d1cd3ebb1b5b3f918b61e150243a1f59e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: '422029f943b685b1bbc3cff5f0fb5bddd8b36939054222f1a49bf8a59bd240f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20871, hash: 'd638684a8927fbf4fc0d9e485900fa23cd3f2408ff4488b544e79ef1cbd6ff2d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
