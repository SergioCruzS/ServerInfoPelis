const { type } = require('express/lib/response');
const https = require('https');

class RequestMovies {

       constructor(){
           this.movies = {};
       };

       getMovies(url = String){
        const req = https.request(url, res =>{
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

module.exports = RequestMovies;
