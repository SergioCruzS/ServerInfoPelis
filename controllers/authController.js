const { response } =  require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require('../helpers/jwt');

const createUser = async (req, res = response ) =>{

    const { email, password } = req.body;

    try {
        const emailExists = await User.findOne({ email });

        if ( emailExists ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            });
        }

        const newUser = new User( req.body );

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync( password, salt );

        await newUser.save();

        //Generar JsonWebToken (JWT)
        const token = await generateJWT(newUser.id);
      
        res.json({
           ok: true,
           newUser,
           token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al admin'
        })
    }

    

}

const loginUser = async (req, res = response) =>{

    const { email, password } = req.body;

    try {
        const userDB = await User.findOne({ email });
        //Verificando que el email esté registrado
        if ( !userDB ) {
            return res.status(400).json({
                ok:false,
                msg: 'Usuario no encontrado'
            });
        } 

        const validPassword = bcrypt.compareSync( password, userDB.password );
        
        //Verificando si la contraseña es correcta
        if ( !validPassword ) {
            return res.status(400).json({
                ok:false,
                msg: 'Contraseña no valida'
            });
        }

        //Generar JWT
        const token = await generateJWT( userDB.id );

        res.json({
            ok: true,
            userDB,
            token
         });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: true,
            msg: 'login'
        });
    }

}


const renewToken = async (req, res = response ) =>{

    const uid = req.uid;

    //Generar un nuevo JWT
    const newToken = await generateJWT( uid );
    
    //Obtener el usuario por el UID
    const user = await User.findById( uid );

    res.json({
        ok: true,
        uid: req.uid,
        user,
        newToken
     });
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}