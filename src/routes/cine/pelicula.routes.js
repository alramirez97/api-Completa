import Router from "express";
import pController from '../../controllers/cine/peliculaController.js';
import verify from '../../middleware/autenticar.js';

const ruta = Router();

ruta.get("/listMovie",pController.listado);
ruta.get("/listHora",pController.horarios);
ruta.get("/listSalas",pController.salas);
ruta.get("/oneMovie/:id",pController.uno);
ruta.post("/searchMovie",pController.buscarTitulo);
ruta.post("/newMovie",[
    verify.verfiyToken,  
    ], pController.create);
ruta.put("/updateMovie/:id",[
    verify.verfiyToken, 
    ], pController.actualizar);
ruta.delete("/deleteMovie/:id",[
    verify.verfiyToken, 
    ],pController.delete);

export default ruta;