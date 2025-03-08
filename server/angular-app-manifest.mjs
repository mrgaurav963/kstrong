
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://mrgaurav963.github.io/kstrong',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/kstrong"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 526, hash: '20ce8773dd84f5d81724accedd4164373445df94e284f1e40db8fe1ab0d27032', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1039, hash: 'b4c67b29299878245f1f4f4c3f69a63567cb3dfd6619c836222e5654f3cf0726', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20864, hash: 'f3f9b338bca0bf8fde3470556e01163e777d3652d469ad86668f4587530a3b60', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
