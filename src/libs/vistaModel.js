import Status from "./status.js";
import Detalle from "./detalle.js";
import Comentario from "./comentario.js";

export default async (viewModel) => {
  const results = await Promise.all([
    Status(),
    Detalle.popular(),
    Comentario.newest(),
  ]);

  viewModel.sidebar = {
    status: results[0],
    popular: results[1],
    comentarios: results[2],
  };

  return viewModel;
};