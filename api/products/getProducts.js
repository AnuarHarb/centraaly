const mongoose = require('mongoose');
const productSchema = require('./model.js');
const products = require('../../db');

var Product = mongoose.model("Product", productSchema);

function getProducts(req, res) {

  Product.find({}, 'nombre', function(err, products){

    if (err) res.send(err).status(400);

    res.send(products).status(200);

  });

  // res.json(proxducts);
};

module.exports = getProducts;
