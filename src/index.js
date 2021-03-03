var server = require("./routes/server");
var router = require("./routes/router");

server.inicio(router.route);