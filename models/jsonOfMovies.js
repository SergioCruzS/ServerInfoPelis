

class JsonOfMovies{

    constructor(){} 

    getListOfMovies (obj = JSON){
        let movies = [];
        if (obj != null) {
          let movie = obj['results'];
          for (const iterator in movie) {
             let resultMovie = JSON.parse(JSON.stringify(movie[iterator]));
             movies.push(resultMovie);
          }
          return movies;
        }
    }

}

module.exports = JsonOfMovies;