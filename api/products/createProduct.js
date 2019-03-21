const mongoose = require('mongoose');
const productSchema = require('./model.js');

var Product = mongoose.model('Product', productSchema);

function createProduct(req, res) {
  const product = new Product(req.body)
  product.save(function(err, product) {
    if (err) res.send(err).status(400)
    res.send(product).status(201)
  });
};

module.exports = createProduct;
