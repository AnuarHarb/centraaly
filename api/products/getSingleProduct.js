const products = require('../../db');

function getSingleProduct(req, res) {
  const productId = req.params.id;
  // -----con for e if --------
  // for(let item of  products.items) {
  //   if(item.id == productId) {
  //     res.json(item).status(200);
  //   }
  // }
  // res.send('No se encontró ese producto').status(404);

  // ------ Con filter -----------
  // const requestedProduct = products.items.filter(function(item) {
  //   return item.id == productId;
  // })

  const requestedProduct = products.items.filter(item => item.id == productId)

  if(requestedProduct.length != 0) {
    res.json(requestedProduct[0]).status(200);
  } else {
    res.send('No se encontró ese producto').status(404);
  }
}

module.exports = getSingleProduct;
