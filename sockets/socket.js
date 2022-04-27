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
  
  var onDisplayMovies = mov.getListOfMovies(pet.getNowPlaying('https://api.themoviedb.org/3/movie/now_playing?api_key=f9beb98e61d3dd537bff3381c028e8c2&language=es-ES&page=1'));
  var popularMovies = mov.getListOfMovies(pet.getNowPlaying('https://api.themoviedb.org/3/movie/top_rated?api_key=f9beb98e61d3dd537bff3381c028e8c2&language=es-ES&page=1'));
  
  io.emit('onDisplayMovies',onDisplayMovies);

  io.emit('popularMovies',popularMovies);



});

