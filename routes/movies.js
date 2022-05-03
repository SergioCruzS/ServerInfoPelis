//Path api/movies

const { Router } = require('express');
const { check }  = require('express-validator');
const { addMovietoUser, getMoviesbyUser, findMovie, deleteMovie } = require('../controllers/movieController');
const { validate } = require('../middlewares/validateFields');
const { validateUID, validateUIDFind } = require('../middlewares/validateUID');


const router = Router();

//Películas

router.post('/new', [
    check('id','El id es obligatorio').not().isEmpty(),
    validate
],addMovietoUser);

router.get('/get',validateUID,getMoviesbyUser);
router.get('/get/findmovie',validateUIDFind,findMovie);
router.get('/get/deletemovie',validateUIDFind,deleteMovie);

module.exports = router;