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

CommentSchema.virtual("detalle")
  .set(function (detalle) {
    this._detalle = detalle;
  })
  .get(function () {
    return this._detalle;
  });

export default model("Comentario", CommentSchema);