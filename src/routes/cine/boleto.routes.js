import Router from "express";
import bController from '../../controllers/cine/boletoController.js'

const ruta = Router();

ruta.get("/listboletos",bController.listado);
ruta.get("/listboleto",bController.uno);
ruta.post("/create",bController.create);
ruta.put("/editarboleto/:id",bController.editar);
ruta.delete("/eliminarboleto/:id",bController.eliminar)

export default ruta;