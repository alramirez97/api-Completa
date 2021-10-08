import Router from "express";
import pController from '../../controllers/cine/peliculaController.js'

const ruta = Router();

ruta.get("/listMovie",pController.listado);
ruta.get("/oneMovie/:id",pController.uno);
ruta.post("/searchMovie",pController.buscarTitulo);
ruta.post("/newMovie", pController.create);
ruta.put("/updateMovie/:id", pController.actualizar);
ruta.delete("/deleteMovie/:id",pController.delete);

export default ruta;