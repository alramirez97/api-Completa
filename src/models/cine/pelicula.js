import Mongoose from 'mongoose';

const peliculaSchema = Mongoose.Schema({
        titulo: {type: String, unique: true},
        duracion: {type: String},
        clasificacion: {type: String},
        genero: {type: String},
        imagen: {type: String,},
        estatus:{type: String, unique: true},
        fechaEstreno:{type: Date},
        detalle_id:[{
            ref: "Detalle", 
            type: Mongoose.Schema.Types.ObjectId
        }]
    },
    {
        versionKey: false
    }
);

export default Mongoose.model("Pelicula", peliculaSchema);