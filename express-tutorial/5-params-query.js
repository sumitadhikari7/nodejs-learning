const express = require('express')
const app = express()
const {products}= require('./data')
const { sortedIndexOf } = require('lodash')

app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} =product;
        return{id, name, image}
    })
    res.json(newProducts)
})
app.get('/api/products/:productId', (req,res)=>{
    console.log(req.params)
    const {productId} = req.params;
    const singleProduct = products.find((product)=>product.id===Number(productId))
    if(!singleProduct){
        return res.status(404).send('<h1>Product does not exist</h1>')
    }
    res.json(singleProduct)
})

//Query
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {search,limit}=req.query
    let sortedProducts = [...products] //Creates copy of products array to prevent modification of original data

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        // res.status(200).send('No Product Found')
        return res.status(200).json({success:true,data:[]})
        //in if statement, we should always use return
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000,()=>{
    console.log('Server is listening to post 5000')
})