import Router from "express";
import bController from '../../controllers/cine/boletoController.js';
import verify from '../../middleware/autenticar.js'
import chechRoles from '../../middleware/chechRoles.js'

const ruta = Router();

ruta.get("/listboletos",bController.listado);
ruta.post("/obtenerPrecio",bController.obtenerPelicula);
ruta.get("/listboleto",bController.uno);
ruta.post("/create/boleto",[
    verify.verfiyToken, 
    verify.isAdmin, 
    ],bController.create);
ruta.put("/editarboleto/:id",[
    verify.verfiyToken, 
    verify.isAdmin, 
    ],bController.editar);
ruta.delete("/eliminarboleto/:id",bController.eliminar)

export default ruta;