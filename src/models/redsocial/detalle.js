import Mongoose from 'mongoose';

const detalleSchema = Mongoose.Schema({
    comercio: [{
        ref: "Comercio",
        type: Mongoose.Schema.Types.ObjectId
    }],
    director: { type: String },
    actores: { type: String },
    sinopsis: { type: String },
    imagen: { type: String },
    pelicula: [{
        ref: "Pelicula",
        type: Mongoose.Schema.Types.ObjectId
    }],
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
},
    {
        versionKey: false,
        timestamps: true,
    }
)