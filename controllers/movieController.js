const { response } = require('express');

const Movie = require('../models/movie')

const addMovietoUser = async ( req, res = response ) => {
    
    try {
        const movieExists = await Movie.findOne(req.body);

        if (movieExists) {
            return res.status(400).json({
                ok: false,
                msg: 'La película ya está ligada a este usuario'
            });
        }

        const newMovie = new Movie(req.body);

        await newMovie.save();

        res.json({
            ok: true,
            newMovie
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al admin'
        });
    }
}

const getMoviesbyUser = async ( req, res = response) => {
    try {
       const uid  = req.headers['x-uid'];
       const jsonUid = {
           'uid': uid
       };
       const movies = await Movie.find( jsonUid );
       console.log(uid);
       if (movies) {
        res.json({
            ok: true,
            uid: uid,
            movies
        });
       }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al admin'
        });
    } 

}

const findMovie = async ( req, res = response) => {
    try {
       const uid  = req.headers['x-uid'];
       const id  = req.headers['x-id'];
       const jsonUid = {
           'uid': uid,
           'id': id
       };
       const movies = await Movie.findOne( jsonUid );
       if (movies.length != 0) {
        res.json({
            ok: true,
            uid: uid,
            movies
        });
       }else{
          res.status(400).json({
              ok: false,
              msg: 'No hay datos'
          });
       }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al admin'
        });
    } 

}
const deleteMovie = async ( req, res = response) => {
    try {
       const uid  = req.headers['x-uid'];
       const id  = req.headers['x-id'];
       const jsonUid = {
           'uid': uid,
           'id': id
       };
       const movies = await Movie.findOneAndDelete( jsonUid );
       if (movies.length != 0) {
        res.json({
            ok: true,
            uid: uid,
            msg: "Película eliminada",
            movies
        });
       }else{
          res.status(400).json({
              ok: false,
              msg: 'No hay datos'
          });
       }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al admin'
        });
    } 

}

module.exports = {
    addMovietoUser,
    getMoviesbyUser,
    findMovie,
    deleteMovie
}