const { Schema, model } = require('mongoose');

const MovieSchema = Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ""
    },
    original_title: {
        type: String,
        default: ""
    },
    poster_path: {
        type: String,
        default: ""
    },
    vote_average: {
        type: String,
        default: "0.0"
    },
    uid: {
        type: String,
        required: true
    }
});

MovieSchema.method('toJSON', function(){
    const { __v, _id, ...register} = this.toObject();
    return register;
});


module.exports = model('Movie',MovieSchema);