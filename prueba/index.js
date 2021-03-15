const server = require("./routes/server");
const router = require("./routes/router");

server.inicio(router.route);