const Product = require('../models/product');

function editProduct(req, res) {
  const productId = req.params.id;
  Product.update({ _id: productId }, {
    $set: {
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      precio: req.body.precio,
      talla: req.body.talla,
      color: req.body.color,
      stock: {
        sur: req.body.stock.sur,
        norte: req.body.stock.norte
      }
    }
  })
  .then(result => {
    res.status(202).json(result)
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  })
}

module.exports = editProduct;
