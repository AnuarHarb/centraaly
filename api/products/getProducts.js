const Product = require('../models/product');


function getProducts(req, res) {
  Product.find()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
};

module.exports = getProducts;
