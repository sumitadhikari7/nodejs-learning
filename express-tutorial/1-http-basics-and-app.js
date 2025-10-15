const http = require('http')
const fs=require('fs')

const path = require('path');
const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyle=fs.readFileSync('./navbar-app/styles.css');
const logo=fs.readFileSync('./navbar-app/logo.png');

//We use sync because:
//1.it stores the file content in homePage variable before the server starts
const server=http.createServer((req,res)=>{

    console.log('User is in the server')
    console.log(req.method) //prints request method in console
    console.log(req.url)

    const url= req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'}) //text/plain= display the exact thing with tags too
        //200: OK, if everything is ok(200) so display the  html that i will send you later like a webpage
        res.write(homePage) //Sends html response
        res.end() //Ends the response
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    else if(url==='/logo.png'){
        res.writeHead(200,{'content-type':'image/png'})
        res.write(logo)
        res.end()
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})
server.listen(5000) 

//for large files, it has an alternative at number 3