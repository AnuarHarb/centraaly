const express = require('express');
const productsRouter = express.Router();

//Midlewares
const getProducts = require('./getProducts');
const createProduct = require('./createProduct');

//Methods
productsRouter.get('/', getProducts);
productsRouter.post('/', createProduct);
productsRouter.put('/', getProducts);
productsRouter.delete('/', getProducts);



module.exports = productsRouter;
