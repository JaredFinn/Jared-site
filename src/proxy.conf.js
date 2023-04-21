const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/.netlify/functions/',
    proxy({
      target: 'https://api.netlify.com',
      changeOrigin: true,
      pathRewrite: {
        '^/\\.netlify/functions': ''
      }
    })
  );
};
