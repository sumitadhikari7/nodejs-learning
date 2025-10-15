const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./navbar-app'))
//express.static le garda chai html bhitra bhako styles, photos pani sabai webpage ma load huncha.
//app.use is for setting up the middleware


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
//yo nagarda pani hunxa because mathi static ko location batai index.html pani pass hunxa webpage ma


app.all('*',(req,res)=>{
    res.status(404).send('Page Not Found')
})
app.listen(5000,()=>{
    console.log('Server is listening to post 5000')
})