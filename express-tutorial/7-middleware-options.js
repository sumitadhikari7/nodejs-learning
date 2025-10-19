const express = require('express')
const app = express()
const morgan = require('morgan') //dependency
const logger = require('./logger')
const authorize = require('./authorize')

// app.use('/api', logger) //Only to routes that begin with /api
// app.use(logger)
app.use(morgan('tiny'))
// app.use([logger,authorize]) // yo garyo vane sabai ma logger ra authorize use hunxa

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    console.log(req.user)
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server is listening to port 5000')
})