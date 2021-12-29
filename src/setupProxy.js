const { createProxyMiddleware } = require('http-proxy-middleware');
const GRAPHQL_ENDPOINT = "https://demo.nexpwa.com/graphql/"
module.exports = function (app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: GRAPHLQL_ENDPOINT,
      changeOrigin: true,
    })
  );
};