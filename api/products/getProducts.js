const products = require('../../db');

function getProducts(req, res) {
  res.json(products);
}

module.exports = getProducts;
