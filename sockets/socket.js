const { io } = require('../index');
const Movie = require('../models/now_playing_response');
const Peticion = require('../models/request');
const results = require('../models/request');

const pet = new Peticion();
const mov = new Movie();

io.on('connection', client => {
  console.log('Cliente Conectado')

  client.on('disconnect',() => {
      console.log('Cliente Desconectado');
  });
  
  var resultados = mov.getListOfMovies(pet.getResults());
  
  io.emit('prueba',resultados);



});

