const http=require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to Home Page')
    }
    if(req.url ==='/about'){
        //Blocking Code-Synchronous
        //It blocks the event loop: While this loop runs, no other requests can be handled, even simple ones like /.
        //blocking code like this is a performance killer in Node.js because Node.js is single-threaded.
        for(let i=0; i<100; i++){
            for(let j=0; j<100; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('Welcome to About Page')
    }
    res.end('<h1>oops, page not found </h1>')
})

server.listen(5000,()=>{
    console.log('Server is listening to port 5000')
})