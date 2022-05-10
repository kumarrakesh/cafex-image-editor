const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v2", {
      target: "http://localhost:3000/",
      secure: "false",
      logLevel: "debug",
    })
  );
  // app.use(
  //   createProxyMiddleware("/", {
  //     target: "http://localhost:3000/",
  //     secure: "false",
  //     logLevel: "debug",
  //   })
  // );
};
