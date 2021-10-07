import Mongoose from 'mongoose';

const detalleSchema = Mongoose.Schema({
        director: {type: String},
        actores: {type: String},
        sinopsis: {type: String},
        pelicula: [{
            ref: "Pelicula",
            type: Mongoose.Schema.Types.ObjectId
        }]
    },
    {
        versionKey: false,
    }
)