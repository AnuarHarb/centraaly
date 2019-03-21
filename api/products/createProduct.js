const products = require('../../db');

function createProduct(req, res) {
  const newItem = req.body;
  newItem.id = products.items.length + 1;
  products.items.push(newItem);

  res.send(newItem).status(201);
}

module.exports = createProduct;
