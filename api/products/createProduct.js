const products = require('../../db');
const mongoose = require('mongoose');
const productSchema = require('./model.js');

var Product = mongoose.model('Product', productSchema);

function createProduct(req, res) {

  var product = new Product(req.body)

  // const newItem = req.body;
  // newItem.id = products.items.length + 1;
  // products.items.push(newItem);

  product.save(function(err, product) {

    if (err) res.send(err).status(400)

    res.send(product).status(201)

  });

  // res.send(newItem).status(201);
};

module.exports = createProduct;
