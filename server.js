
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/redirect') {
    res.writeHead(302, {
      Location: '/final'
    });    
    res.end();
  } else if (req.url === '/final') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('You reached the final destination!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
