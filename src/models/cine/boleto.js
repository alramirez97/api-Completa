import Mongoose from 'mongoose';

const boletoSchema = Mongoose.Schema({
        comercio: [{
            ref:"Comercio",
            type: Mongoose.Schema.Types.ObjectId
        }],
        pelicula: [{
            ref: "Pelicula",
            type: Mongoose.Schema.Types.ObjectId
        }],
        fecha: {type: Date, default: Date.now},
        horario: [{
            ref: "Horario",
            type: Mongoose.Schema.Types.ObjectId
        }],
        sala: [{
            ref: "Sala",
            type: Mongoose.Schema.Types.ObjectId
        }],
        precio: {type: String},
        numBoleto:{type: Number}

    },
    {
        versionKey: false,
    }
)

export default Mongoose.model("Boleto", boletoSchema);