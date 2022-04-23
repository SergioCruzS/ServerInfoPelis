

class Movie{

    constructor (adult, backdropPath,genreIds,id,originalLanguage,
                 originalTitle,overview,popularity,posterPath,releaseDate,
                 title,video,voteAverage,voteCount){
        this.adult = adult;
        this.backdropPath = backdropPath;
        this.genreIds = genreIds;
        this.id = id;
        this.originalLanguage = originalLanguage;
        this.originalTitle = originalTitle;
        this.overview = overview;
        this.popularity = popularity;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.title = title;
        this.video = video;
        this.voteAverage = voteAverage;
        this.voteCount = voteCount;
    }
    
    

    /*
      Español:
      fullPosterImage obtiene el poster de la película, en caso de no tener poster regresa otra imagen

      English:
      fullPosterImage obtains the movie poster, in case of not having a poster it returns another image
    */
    get fullPosterImage(){
      if (this.posterPath != null ) 
        return 'https://image.tmdb.org/t/p/w500'+this.posterPath;
      else
        return 'https://timescineplex.com/times/img/no-poster.png';
    }

    /*
      Español:
      fullBackdropPath obtiene el fondo de la película, en caso de no tener poster regresa otra imagen

      English:
      fullBackdropPath obtains the movie Backdrop, in case of not having a poster it returns another image
    */
    
    get fullBackdropPath(){
      if (this.backdropPath != null ) 
        return 'https://image.tmdb.org/t/p/w500${this.backdropPath}';
      else
        return 'https://timescineplex.com/times/img/no-poster.png';
    }

     typeMap = {
        "Movie": o([
            { json: "dates", js: "dates", typ: r("Dates") },
            { json: "page", js: "page", typ: 0 },
            { json: "results", js: "results", typ: a(r("Result")) },
            { json: "total_pages", js: "total_pages", typ: 0 },
            { json: "total_results", js: "total_results", typ: 0 },
        ], false),
        "Dates": o([
            { json: "maximum", js: "maximum", typ: Date },
            { json: "minimum", js: "minimum", typ: Date },
        ], false),
        "Result": o([
            { json: "adult", js: "adult", typ: true },
            { json: "backdrop_path", js: "backdrop_path", typ: "" },
            { json: "genre_ids", js: "genre_ids", typ: a(0) },
            { json: "id", js: "id", typ: 0 },
            { json: "original_language", js: "original_language", typ: r("OriginalLanguage") },
            { json: "original_title", js: "original_title", typ: "" },
            { json: "overview", js: "overview", typ: "" },
            { json: "popularity", js: "popularity", typ: 3.14 },
            { json: "poster_path", js: "poster_path", typ: "" },
            { json: "release_date", js: "release_date", typ: Date },
            { json: "title", js: "title", typ: "" },
            { json: "video", js: "video", typ: true },
            { json: "vote_average", js: "vote_average", typ: 3.14 },
            { json: "vote_count", js: "vote_count", typ: 0 },
        ], false),
        "OriginalLanguage": [
            "en",
            "es",
            "fr",
            "ja",
        ],
    };
}