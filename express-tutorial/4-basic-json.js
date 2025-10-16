const express=require('express');
const app=express();
const {products}= require('./data')
//importing products from data.js

app.get('/',(req,res)=>{
    res.json(products)
})
app.listen(5000,()=>{
    console.log('Server is listening to port 5000')
})