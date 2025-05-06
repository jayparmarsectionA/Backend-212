import http from 'node:http';

// Create a local server to receive data from
const server = http.createServer((req, res) => {

    console.log(req)
    if (req.url == "/"){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
}

else if (req.url == "/about"){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'this is about section',
    }));
  }
});

server.listen(8000);