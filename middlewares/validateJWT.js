const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {

    //Leer token
    const token = req.header('x-token');

    if ( !token ) {
        res.status(401).json({
            ok: false,
            msg: 'No hay token'
        });
    }

    try {
        const { uid } = jwt.verify( token, process.env.JWT_KEY );
        req.uid = uid;


        next();
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

    
   
}

module.exports = {
    validateJWT
}