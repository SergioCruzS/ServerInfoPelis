const { response } = require('express');

const validateUID = (req, res = response, next) => {

    //Leer Uid
    const uid = req.header('x-uid');

    if ( !uid ) {
        res.status(401).json({
            ok: false,
            msg: 'No hay uid'
        });
    }

    try {
        req.uid = uid;
        next();
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'uid no válido'
        });
    }

}


const validateUIDFind = (req, res = response, next) => {

    //Leer Uid
    const uid = req.header('x-uid');
    const id = req.header('x-id');

    if ( !uid ) {
        res.status(401).json({
            ok: false,
            msg: 'No hay uid'
        });
    }
    
    if ( !id ) {
        res.status(401).json({
            ok: false,
            msg: 'No hay id'
        });
    }

    try {
        req.uid = uid;
        next();
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'uid no válido'
        });
    }

}

module.exports = {
    validateUID,
    validateUIDFind
}