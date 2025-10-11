const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('Welcome home')
    }
    if(req.url === '/about'){
        res.end('This is about section')
    }
    res.end(`<h1>Oops! Page not found</h1>
        <a href="/">Back home</a>`)
})
server.listen(5000)