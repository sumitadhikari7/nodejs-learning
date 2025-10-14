const http = require('http')
const server=http.createServer((req,res)=>{
    console.log('User is in the server')
    res.end('Welcomeeeeee')
})
server.listen(5000)