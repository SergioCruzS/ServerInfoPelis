
//path:  api/login

const { Router } = require('express');
const { check }  = require('express-validator');

const { createUser, loginUser, renewToken } = require('../controllers/authController');
const { validate } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

//Usuario

router.post('/new', [
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El correo es obligatorio').not().isEmpty().isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validate
],createUser);

router.post('/', [
    check('email','El correo es obligatorio').not().isEmpty().isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
],loginUser);


router.get('/renew', validateJWT, renewToken);

module.exports = router;