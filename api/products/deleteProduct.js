const products = require('../../db');

function deleteProduct(req, res){
  const deleteId = req.params.id;
  products.items = products.items.filter( item => item.id != deleteId);

  res.send(products.items).status(202);
}

module.exports = deleteProduct;
