import Comentario from '../models/redsocial/comentarios.js'
import Detalle from '../models/redsocial/detalle.js'

/**
 * Funcion para contar cuantas publicaciones hay registradas
 */
async function contarPublicaciones() {
  return await Detalle.countDocuments();
}
/**
 * Funcion para contar cuantos comentarios hay
 */
async function contarComentarios() {
  return await Comentario.countDocuments();
}
/**
 * Funcion para contar cuantas veces se ha visto una publicacion
 */
async function countViewsPubicacion() {
  const result = await Detalle.aggregate([
    {
      $group: {
        _id: "1",
        viewsTotal: { $sum: "$views" },
      },
    },
  ]);
  let viewsTotal = 0;
  if (result.length > 0) {
    viewsTotal += result[0].viewsTotal;
  }
  return viewsTotal;
}
/**
 * Funcion para contar cuantos likes tiene una publicacion
 */
async function contarLikes() {
  const result = await Detalle.aggregate([
    {
      $group: {
        _id: "1",
        likesTotal: { $sum: "$likes" },
      },
    },
  ]);

  let likesTotal = 0;
  if (result.length > 0) {
    likesTotal += result[0].likesTotal;
  }
  return likesTotal;
}

export default async () => {
  const results = await Promise.all([
    contarPublicaciones(),
    contarComentarios(),
    countViewsPubicacion(),
    contarLikes(),
  ]);

  return {
    detalles: results[0],
    comentarios: results[1],
    views: results[2],
    likes: results[3],
  };
};