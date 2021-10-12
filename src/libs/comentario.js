import Comentario from "../models/redsocial/comentarios.js";
import Detalle from "../models/redsocial/detalle.js";

export default {
  async newest() {
    const comentarios = await Comentario.find().limit(5).sort({ timestamp: -1 });

    for (const coment of comentarios) {
      const publicacion = await Detalle.findOne({ _id: coment.detalle });
      coment.detalle = publicacion;
    }

    return comentarios;
  },
};