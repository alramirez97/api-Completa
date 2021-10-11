import Mongoose from 'mongoose';

const reservaShema = Mongoose.Schema({
     NVenta: {type:String},
     pelicula: [{
      ref: "Pelicula",
      type: Mongoose.Schema.Types.ObjectId
  }],
     cantidad: {type:String},
     precio: {type: String},
     total: {type:String},
     fechaReser: {type: Date, default: Date.now}
     
},
{
    versionKey: false
  }
);

export default Mongoose.model("Reservacion", reservaShema);