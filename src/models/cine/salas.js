import Mongoose from 'mongoose';

const salaSchema = Mongoose.Schema({
        sala: {type: String, max: 10, min: 5},
    },
    {
        versionKey: false,
    }
)

export default Mongoose.model("Sala", salaSchema);