import  Mongoose  from "mongoose";


const comercioSchema=Mongoose.Schema({

    nombreComercio: { type: String, },
    propietario: { type: String, },
    lng: { type: Number,},
    lat: { type: Number,},
    telefono: { type: String,},
    redes_sociales: { type: String,},
    categoria: [{
        ref: "Categoria",
        type: Mongoose.Schema.Types.ObjectId
      }],
    descripcion: { type: String, min: 5, max: 100},
    logo: { type: String, }
})

export default Mongoose.model('Comercio',comercioSchema)