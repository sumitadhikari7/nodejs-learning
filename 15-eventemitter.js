//Event Emitter
const EventEmitter = require('events');

const customEmitter = new EventEmitter()
//on= listen for an event
//emit= emit an event
customEmitter.on('response',()=>{
    console.log('Data Received')
})

customEmitter.on('vamos', ()=>{
    console.log('Yesssssss')
})




//this looks best method-use this
function handleResponse(){
    console.log('This is used when we plan to remove it later using off')
}
customEmitter.on('next', handleResponse);

customEmitter.emit('next') //gives the o/p
customEmitter.off('next', handleResponse) //removes the listener
customEmitter.emit('next') //no output
//this method ends here




customEmitter.emit('response') //this string 'response' has to match with above string of .on
customEmitter.emit('vamos')




function PassingData(name,id){
    console.log(`Data received with ${name} and ${id}`)
}
customEmitter.on('pass',PassingData)
customEmitter.emit('pass', 'Sumit', 20)



//Event Emmitter- HTTP Module
const http = require('http')

const server = http.createServer()

function request(req,res){
    res.end('Welcome')
}
server.on('request',request)
server.listen(5000)