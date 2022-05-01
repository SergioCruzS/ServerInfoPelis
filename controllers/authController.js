const { response } =  require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const createUser = async (req, res = response ) =>{

    const { email } = req.body;

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


        await newUser.save();
      
        res.json({
           ok: true,
           newUser
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al admin'
        })
    }

    

}

module.exports = {
    createUser
}