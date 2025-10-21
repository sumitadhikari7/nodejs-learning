const express = require('express')
const app = express()
const peopleRouter = require('./controllers/control')
const authRouter = require('./routes/auth')


//static assets
app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false})) //Gives you req.body in your POST routes
//without this. req.body wouldn't work
app.use(express.json()); //Without it, req.body will be undefined for JSON posts (like Axios requests).
app.use('/api/people',peopleRouter) //yesle garda people.js ma /:id matra rakhe hunxa sabai ma /api/people:id garirakhna pardaina
app.use('/login', authRouter)

app.listen(5000,()=>{
    console.log('Server is listening to port 5000')
})