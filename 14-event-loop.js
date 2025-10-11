//Event loop allows js to perform non-blocking i/o by offloading operations to system kernel whenever possible
//despite js being single threaded..
//immediate tasks haru suru ma run hunxa. callbacks haru free time ma matra execute hunxa

const fs = require('fs')
console.log('Started first task')

const read=fs.readFile('./test/subfol/test.txt','utf8', (error,result)=>{
    if(error){
        console.log('Error occured while reading')
        return;
    }
    //yo tala ko 2ta callbacks ho. they will run at last
    console.log(result)
    console.log('Completed first task')
})

// yo starting 2nd ma run hunxa, after started
console.log('Starting next task')




console.log('first')

//yo second chai last ma execute hunxa, it is a callback
setTimeout(() => {
    console.log('second')
}, 0);
console.log('third')

// exe order: first, third and second




setInterval(() => {
    console.log('This runs after')
}, 2000);
console.log('This runs first')

// there is difference between setinterval and settimeout
// in setinterval, the process runs repeatedly at a fixed interval
// in settimeout, the process only executes once after a specified delay




const http=require('http')

const server=http.createServer((req,res)=>{
    console.log('Request Event')
    res.end('Hello Guys')
})

server.listen(5000,()=>{
    console.log('Listening to port:5000')
})

