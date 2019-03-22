const Product = require('../models/product');
const mongoose = require('mongoose');

function createProduct(req, res) {

  const newProduct = new Product({
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

  newProduct.save()
    .then(result => {
      res.status(201).json({
        message: "Se creó un producto correctamente",
        nuevoProducto: newProduct
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
};

module.exports = createProduct;
