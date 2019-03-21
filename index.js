const express = require('express');
const app = express(); //Ejecutamos express para acceder a sus metodos y funcionalidades
const port = 8080;
const chalk = require('chalk'); // Pinta colores en la consola
const mongoose = require('mongoose');

var dbUrl = "mongodb+srv://andrea:code@centraal-academy-rcmzy.gcp.mongodb.net/test?retryWrites=true";
// "mongodb+srv://user:centraal123@centraalacademy-qsrt2.gcp.mongodb.net/test?retryWrites=true"
mongoose.connect(dbUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected')
});

// Escuchar peticiones en un puerto
app.listen(port /*8080*/, () => {
  console.log(`Escuchando en el puerto ${port}...`);
  console.log(chalk.cyan(`http://localhost:${port}`));
});

//Routes
const api = require('./api'); //importamos el index de la carpeta api para poder utilizarlo en caso de que se haga una petición a esa ruta
app.use('/api', api);
