const express = require('express');
const cart = require('./shopping_cart.js');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to my e commerce app');
})

app.use('/cart',cart)

app.listen(3000,()=>{
    console.log("listening on port 3000");
})