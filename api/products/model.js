const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var product = new Schema({
  nombre: String,
  tipo: String,
  precio: Number,
  talla: Array,
  color: Array,
  stock: {
    sur: Number,
    norte: Number
  }
});

product.methods.verificarStockSur = function() {
  if (this.stock.sur == 0) {
    console.log("No hay stock disponible en suc. Sur.")
  }
}

product.methods.verificarStockNorte = function() {
  if (this.stock.norte == 0) {
    console.log("No hay stock disponible en suc. Norte.")
  }
}

module.exports = product;
