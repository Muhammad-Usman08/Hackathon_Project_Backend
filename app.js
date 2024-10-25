const express = require('express')
const app = express()
const port = 3000;
const productData = require('./data/products_data');



//get method
app.get('/products', function(req, res){
    res.send(productData);
});
//get method
app.get('/', function(req, res){
    res.send('hello world!');
});
app.listen(port, ()=>{
    console.log(`Server is running http://localhost:${port}`);
})