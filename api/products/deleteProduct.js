const Product = require('../models/product.js');

function deleteProduct(req, res){
  const deleteId = req.params.id;
  Product.remove({_id: deleteId})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: err
      })
    })
}

module.exports = deleteProduct;
