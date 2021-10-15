import  Mongoose  from "mongoose";


const comercioSchema=Mongoose.Schema({

    nombreComercio: { type: String, max: 25, min: 5, required: true },
    propietario: { type: String, max: 15, min: 5, required: true },
    longitud: { type: String,},
    latitud: { type: String,},
    telefono: { type: String, max: 15, min: 8, require: true },
    redes_sociales: { type: String, min: 8 },
    categoria: [{
        ref: "Categoria",
        type: Mongoose.Schema.Types.ObjectId
      }],
    descripcion: { type: String, min: 5, max: 100},
    logo: { type: String, min: 5}
})

export default Mongoose.model('Comercio',comercioSchema)