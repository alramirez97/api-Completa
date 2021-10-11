import Router from "express";
import rController from '../../controllers/cine/reservacionController.js'

const ruta = Router();

ruta.get("/listReserva",rController.listado);
ruta.get("/UnaReserva/:id",rController.uno);
ruta.post("/nuevaReserva",rController.create);
ruta.put("/editarReserva/:id",rController.editar);
ruta.delete("/deleteReserva/:id",rController.eliminar);


export default ruta;