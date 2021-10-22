import Mongoose from "mongoose";

const CommentSchema = Mongoose.Schema(
  {
    detalle: [{ 
      ref:"Detalle",
      type: Mongoose.Schema.Types.ObjectId 
    }],
    email: { type: String },
    comentario: { type: String },
    fechaComentario: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);



export default Mongoose.model("Comentario", CommentSchema);