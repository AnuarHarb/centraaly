module.exports = {
  items: [
    {
      id: 1,
      nombre: 'playera casual',
      tipo: 'polo',
      precio: 150,
      talla: ['s', 'm', 'l', 'xl'],
      color: ['negro', 'azul', 'rojo'],
      stock: {
        sur: 20,
        norte: 10
      }
    },
    {
      id: 2,
      nombre: 'vestido de playa',
      tipo: 'vestido',
      precio: 250,
      talla: ['s', 'm', 'l'],
      color: ['rosa', 'azul'],
      stock: {
        sur: 5,
        norte: 1
      }
    },
    {
      id: 3,
      nombre: 'bermudas',
      tipo: 'short',
      precio: 120,
      talla: ['l'],
      color: ['cafe', 'bicolor'],
      stock: {
        sur: 50,
        norte: 4
      }
    }
  ]
}
