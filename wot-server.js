const restApp = require('./servers/http');

var createServer = function (port, secure) {
    if (process.env.PORT) port = process.env.PORT;
}
