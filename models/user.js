

const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    online: {
        type: Boolean,
        default: false
    }
});

UserSchema.method('toJSON', function(){
    const { __v, _id, password, ...register} = this.toObject();
    register.uid = _id;
    return register;
});


module.exports = model('User',UserSchema);