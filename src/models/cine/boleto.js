import Mongoose from 'mongoose';

const boletoSchema = Mongoose.Schema({
<<<<<<< HEAD
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
    precio: {type: String},
    descuento:{type: String},
    total:{type: String}

},
{
    timestamps: true,
    versionKey: false,
}
=======
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
        precio: {type: String},
        descuento:{type: String},
        total:{type: String}

    },
    {
        timestamps: true,
        versionKey: false,
    }
>>>>>>> 3c8630eb5cf5a297ee7ac2220c1d395e134a8141
)

export default Mongoose.model("Boleto", boletoSchema);