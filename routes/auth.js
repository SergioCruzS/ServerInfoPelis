
//path:  api/login

const { Router } = require('express');
const { check }  = require('express-validator');

const { createUser, loginUser } = require('../controllers/authController');
const { validate } = require('../middlewares/validateFields');

const router = Router();

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

module.exports = router;