import Publicacion from '../../controllers/redsocial/detalleController.js'
import  Express  from 'express';

const router = Express.Router();

router.get("/publicacion", Publicacion.listado);
router.get("/publicacion/:id", Publicacion.vistas);
router.get("/obtenerOne/:id", Publicacion.listId);
router.post("/publicacion/create", Publicacion.create);
router.post("/publicacion/:id/like", Publicacion.like);
router.post("/publicacion/:id/comment", Publicacion.comment);
router.delete("/publicacion/delete/:id", Publicacion.delete);

export default router;