import Mongoose from "mongoose";

const CommentSchema = Mongoose.Schema(
  {
    publicacion: { type: Mongoose.Schema.Types.ObjectId },
    email: { type: String },
    comment: { type: String },
    fechaComentario: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

CommentSchema.virtual("publicacion")
  .set(function (publicacion) {
    this._publicacion = publicacion;
  })
  .get(function () {
    return this._publicacion;
  });

export default model("Comentario", CommentSchema);