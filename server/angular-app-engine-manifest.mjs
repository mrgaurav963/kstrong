
export default {
  basePath: 'https://mrgaurav963.github.io/kstrong/portal',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
