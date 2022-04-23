const { type } = require('express/lib/response');
const https = require('https');

class Request {

       constructor(){
           this.movies = {};
       };

       getResults(){
        const req = https.request('https://api.themoviedb.org/3/movie/now_playing?api_key=f9beb98e61d3dd537bff3381c028e8c2&language=es-ES&page=1', res =>{
            console.log('status code: ',res.statusCode);
            let results = '';
            res.on('data', result => {
               results += result;
            });

            res.on('end',()=>{
                results.replace('undefined','');
                this.movies = JSON.parse(results);
            });
        });
        
        req.on('error', err =>{});
        req.end();
        return this.movies;
      }
}

module.exports = Request;
