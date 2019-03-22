const Product = require('../models/product');

function deleteProduct(req, res){

  Product.remove({ _id: req.params.id })
    .then(result => {
      if(result.n > 0){
        res.status(200).json({
          message: 'Se borró el elemento'
        })
      } else {
        res.status(404).json({
          message: 'No se encontró el elemento para borrar'
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
}

module.exports = deleteProduct;
