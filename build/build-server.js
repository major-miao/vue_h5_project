// https://github.com/shelljs/shelljs
require('shelljs/global');
env.NODE_ENV = 'production';

let fs = require('fs');
let path = require('path');
// let argv = require('optimist').argv
let express = require('express');
let config = require('../config');
let proxyMiddleware = require('http-proxy-middleware');
let opn = require('opn')
let app = express()
let port = process.env.PORT || config.build.port;
let proxyTable = config.dev.proxyTable

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(context, options))
});

// var mockDir = path.resolve(__dirname, '../src/mock');
// (function setMock(mockDir) {
//   fs.readdirSync(mockDir).forEach(function (file) {
//     var filePath = path.resolve(mockDir, file);
//     var mock;
//     if (fs.statSync(filePath).isDirectory()) {
//       setMock(filePath);
//     }
//     else {
//       mock = require(filePath);
//       app.use(mock.api, argv.proxy ?  proxyMiddleware({target: '', changeOrigin: true}) : mock.response);
//     }
//   });
// })(mockDir);

// serve pure static assets
let staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static(path.resolve(__dirname, '../dist/static')))

app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'), {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  });
});
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  let uri = 'http://localhost:' + port;
  console.log('Build server listening at ' + uri + '\n')
  opn(uri)
});