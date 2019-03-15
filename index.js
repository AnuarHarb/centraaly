const express = require('express');
const app = express(); //Ejecutamos express para acceder a sus metodos y funcionalidades
const port = 8080;
const chalk = require('chalk'); // Pinta colores en la consola


//Rutas
app.get('/', (req, res) => {
  res.send('Estoy respondinedo algo');
});

// app.post()
// app.put()
// app.delete()



// Escuchar peticiones en un puerto
app.listen(port /*8080*/, () => {
  console.log(`Escuchando en el puerto ${port}...`);
  console.log(chalk.cyan(`http://localhost:${port}`));
});
