import Mongoose from 'mongoose';

const horarioSchema = Mongoose.Schema({
        hora:  {type: String},
    },
    {
        versionKey: false,
    }

);
export default Mongoose.model("Horario", horarioSchema);