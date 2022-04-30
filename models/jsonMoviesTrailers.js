const RequestMovies = require("./request");

class JsonMoviesTrailers{
    constructor (){}

    getListOfTrailers (obj = JSON){
        const requestVideos = new RequestMovies();
        let videos = [];
        if (obj != null) {
          let video = obj['results'];
          console.log(obj);
          for (const iterator in video) {
             let resultMovie = JSON.parse(JSON.stringify(video[iterator]));
             videos.push(resultMovie);
          }
          return videos;
        }
    }
}

module.exports = JsonMoviesTrailers;