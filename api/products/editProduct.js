const products = require('../../db');

function editProduct(req, res) {
  const productId = req.params.id;
  const newProduct = req.body;
  const itemsList = products.items;

  for(let key in itemsList) {
    if(itemsList[key].id == productId) {
      newProduct.id = itemsList[key].id;
      itemsList[key] = newProduct;
      res.send(newProduct).status(202);
    }
  }
  res.send('No existe ese id').status(404);
}

module.exports = editProduct;
