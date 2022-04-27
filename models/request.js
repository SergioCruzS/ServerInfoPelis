const { type } = require('express/lib/response');
const https = require('https');

class Request {

       constructor(){
           this.nowPlayingMovies = {};
       };

       getNowPlaying(url = String){
        const req = https.request(url, res =>{
            console.log('status code: ',res.statusCode);
            let results = '';
            res.on('data', result => {
               results += result;
            });

            res.on('end',()=>{
                results.replace('undefined','');
                this.nowPlayingMovies = JSON.parse(results);
            });
        });
        
        req.on('error', err =>{});
        req.end();
        return this.nowPlayingMovies;
      }
}

module.exports = Request;
