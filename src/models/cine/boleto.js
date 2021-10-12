import Mongoose from 'mongoose';

const boletoSchema = Mongoose.Schema({
    comercio: [{
        ref:"Comercio",
        type: Mongoose.Schema.Types.ObjectId
    }],
    numBoleto:{type: String},
    pelicula: [{
        ref: "Pelicula",
        type: Mongoose.Schema.Types.ObjectId
    }],
    horario: [{
        ref: "Horario",
        type: Mongoose.Schema.Types.ObjectId
    }],
    sala: [{
        ref: "Sala",
        type: Mongoose.Schema.Types.ObjectId
    }],
    descuento:{type: String},
    total:{type: String}

},
{
    timestamps: true,
    versionKey: false,
}
)

export default Mongoose.model("Boleto", boletoSchema);