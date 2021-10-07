import Router from "express";
import pController from '../../controllers/cine/peliculaController.js'

const ruta = Router();

ruta.get("/listMovie",pController.listado);
ruta.get("/listSalas",pController.listados);
ruta.delete("/deleteCategoria/:id",pController.eliminar);
ruta.get("/oneMovie/:id",pController.uno);
ruta.post("/searchMovie",pController.buscarTitulo);
ruta.post("/newMovie", pController.create);

export default ruta;