const express = require('express');
const router = express.Router();

let shopping_cart = [];

router.get('/',(req,res)=>{
    if(shopping_cart.length){
        res.send(shopping_cart);
    }
    else{
        res.send('cart is empty');
    }
})

router.post('/',(req,res)=>{
    const item = req.body.item;
    shopping_cart.push(item);
    res.send(`the item: ${item} was successfully added to cart`);
})

router.put('/:old_item',(req,res)=>{
    const old_item = req.params.old_item;
    const index = shopping_cart.indexOf(old_item);
    if(index>-1){
        const new_item = req.body.item;
        shopping_cart.splice(index,1,new_item);
        res.send(`${old_item} was successfully replaced by ${new_item}`);
    }
    else{
        res.status(404).send(`item: ${old_item} is not in cart`);
    }
})

router.delete('/:item',(req,res)=>{
    const item = req.params.item;
    const index = shopping_cart.indexOf(item);
    if(index>-1){
        shopping_cart.splice(index,1);
        res.send(`item ${item} was successfully deleted from the cart`);
    }
    else{
        res.status(404).send(`item: ${item} is not in cart`);
    }
})

module.exports = router;