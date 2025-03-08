
export default {
  basePath: 'https://mrgaurav963.github.io/kstrong',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
