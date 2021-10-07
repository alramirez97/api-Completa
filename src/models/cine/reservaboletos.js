import Mongoose from 'mongoose';

const reservaShema = Mongoose.Schema({
     NVenta: {type:String, unique:true},
     boleto: [{
        ref: 'Boleto',
        type: Mongoose.Schema.Types.ObjectId
    }],
     cantidad: {type:Number},
     total: {type:String},
     fechaReser: {type: Date, default: Date.now}
     
},
{
    versionKey: false
  }
);

export default Mongoose.model("Reservacion", reservaShema);