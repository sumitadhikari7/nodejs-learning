var http = require('http')
var fs= require('fs')

const server= http.createServer((req,res)=>{
    // const text=fs.readFileSync('./test/subfol/big.txt', 'utf8')
    // res.end(text)

    const fileStream= fs.createReadStream('./test/subfol/big.txt', 'utf8');
    fileStream.on('open',()=>{
        fileStream.pipe()
    })
})
server.listen(5000)
//mathi const server= bhako vayera yeta server. bhako natra .listen matra
