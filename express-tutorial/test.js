const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
const homePage = fs.readFileSync(filePath, 'utf-8');
console.log('HomePage content:', homePage);

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Not Found</h1>');
    }
});

server.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
});
