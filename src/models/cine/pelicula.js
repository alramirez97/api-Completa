import Mongoose from 'mongoose';

const peliculaSchema = Mongoose.Schema({
        titulo: {type: String, unique: true},
        duracion: {type: String},
        clasificacion: {type: String},
        genero: {type: String},
        imagen: {type: String,},
        status:{type: String,},
        fechaEstreno:{type: Date},
    },
    {
        versionKey: false
    }
);

export default Mongoose.model("Pelicula", peliculaSchema);
