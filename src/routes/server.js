var http = require("http");
var url = require("url");

function inicio(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname, response);

    
  }
  const port = '3000';
  const server = http.createServer(onRequest);  
  server.listen(port, () => {
    console.log('Server on port', port);
    });
}

//exportando módulo
exports.inicio = inicio;


