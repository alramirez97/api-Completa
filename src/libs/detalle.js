import Detalle from "../models/redsocial/detalle.js";
export default {
    async popular() {
      const publicaciones = await Detalle.find().limit(9).sort({ likes: -1 });
      return publicaciones;
    },
  };