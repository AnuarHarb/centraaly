const Product = require('../models/product');

function getSingleProduct(req, res) {
  const productId = req.params.id;
  Product.findById(productId)
    .then( doc => {
      console.log('from database', doc)
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
}

module.exports = getSingleProduct;
