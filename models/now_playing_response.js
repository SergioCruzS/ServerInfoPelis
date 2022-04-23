

class Movie{

    constructor(){
        this.adult;
        this.backdropPath;
        this.genreIds;
        this.id;
        this.originalLanguage;
        this.originalTitle;
        this.overview;
        this.popularity;
        this.posterPath;
        this.releaseDate;
        this.title;
        this.video;
        this.voteAverage;
        this.voteCount;
    }    

    get fullPosterImage(){
        if (this.posterPath != null ) 
          return 'https://image.tmdb.org/t/p/w500${this.posterPath}';
        else
          return 'https://timescineplex.com/times/img/no-poster.png';
    }

    get fullBackdropPath(){
        if (this.backdropPath != null ) 
          return 'https://image.tmdb.org/t/p/w500${this.backdropPath}';
        else
          return 'https://timescineplex.com/times/img/no-poster.png';
    }

    getListOfMovies (obj = JSON){
        let movies = [];
        if (obj != null) {
          let movie = obj['results'];
          for (const iterator in movie) {
            //let movieJson = JSON.parse(iterator);
             let resultMovie = JSON.parse(JSON.stringify(movie[iterator]));
             movies.push(new Movie(resultMovie['adult'],
                         resultMovie['backdropPath'],
                         resultMovie['genreIds'],
                         resultMovie['id'],
                         resultMovie['originalLanguage'],
                         resultMovie['originalTitle'],
                         resultMovie['overview'],
                         resultMovie['popularity'],
                         resultMovie['posterPath'],
                         resultMovie['releaseDate'],
                         resultMovie['title'],
                         resultMovie['video'],
                         resultMovie['voteAverage'],
                         resultMovie['voteCount'])           
             );
          }
          return movies;
        }
    }

}

module.exports = Movie;