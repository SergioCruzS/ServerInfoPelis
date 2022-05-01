const { io } = require('../index');
const JsonOfMovies = require('../models/jsonOfMovies');
const RequestMovies = require('../models/request');

//Películas en cines
const nowPlayingMoviesJson = new JsonOfMovies();
const requestNowPlayingMovies = new RequestMovies();
//Películas populares
const popularMoviesJson = new JsonOfMovies();
const requestPopularMovies = new RequestMovies();

//Películas Top
const topMoviesJson = new JsonOfMovies();
const requestTopMovies = new RequestMovies();

io.on('connection', client => {
  console.log('Cliente Conectado')

  client.on('disconnect',() => {
      console.log('Cliente Desconectado');
  });
  
  var onDisplayMovies = nowPlayingMoviesJson.getListOfMovies(requestNowPlayingMovies.getMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=f9beb98e61d3dd537bff3381c028e8c2&language=es-ES&page=1'));
  var popularMovies = popularMoviesJson.getListOfMovies(requestPopularMovies.getMovies('https://api.themoviedb.org/3/movie/popular?api_key=f9beb98e61d3dd537bff3381c028e8c2&language=es-ES&page=1'));
  var topMovies = topMoviesJson.getListOfMovies(requestTopMovies.getMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=f9beb98e61d3dd537bff3381c028e8c2&language=es-ES&page=1'));

  client.emit('onDisplayMovies',onDisplayMovies);

  client.emit('popularMovies', popularMovies);

  client.emit('topMovies', topMovies);
});

