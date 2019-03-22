const mongoose = require('mongoose');
const Product = require('../models/product');

function createProduct(req, res) {

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    precio: req.body.precio,
    talla: req.body.talla,
    color: req.body.color,
    stock: {
      sur: req.body.stock.sur,
      norte: req.body.stock.norte
    }
  });

  product.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Se agregó un producto exitosamente",
        createProduct: product
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })

};

module.exports = createProduct;
