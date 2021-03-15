function route(pathname, response) {
    if(pathname.match('/hello.*/'))
    {
        const name = pathname.split("/")[2];
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify({hello: name}));
        response.end();
    }
  }
  
  exports.route = route;