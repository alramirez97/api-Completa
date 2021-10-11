import Detalle from '../../models/redsocial/detalle.js';
import Pelicula from '../../models/cine/pelicula.js';
import Comentario from '../../models/redsocial/comentarios.js';

const controlador = {};

/**
 * GET de todas las publicaciones
 */
controlador.listado = async (req, res) => {
    console.log("Listado de publicaciones");
    await Detalle.find().sort({ timestamps: -1 })
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No hay datos de publicaciones",
            }

        ));
};
/**
 * GET de una publicacion by ID
 */
controlador.listId = async (req, res) => {
    console.log("Consulta individual")
    await Detalle.findById(req.params.id)
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "Publicacion no encontrada!.",
                "id": req.params.id
            }

        ));
};
/**
 * POST de una publicacion
 */
controlador.create = async (req, res) => {
    console.log("Creando publicacion")
    const { director, actores, sinopsis, imagen, pelicula } = req.body;

    const newPublicacion = new Detalle({
        director,
        actores,
        sinopsis,
        imagen
    });
    if (pelicula) {
        const foundpelicula = await Pelicula.find({ titulo: { $in: pelicula } })
        newPublicacion.pelicula = foundpelicula.map(titulo => titulo._id);
    }
    else {

        res.status(400).send({
            "menssage": "Necesita asignar una pelicula para publicar",
            "datos": req.body
        })
    }
    await newPublicacion.save()
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send({
            "error": "No se pudo publicar revise que envia los datos correctamente",
            "datos": req.body
        }));
};
/**
 * PUT de una publicacion
 */
controlador.update = async (req, res) => {
    if (req.body.categoria) {
        const foundCategoria = await Categoria.find({ categoria: { $in: req.body.categoria } })
        req.body.categoria = foundCategoria.map(cat => cat._id);
        await comercio.findByIdAndUpdate(req.params.id, req.body)
            .then((entidad) => res.status(200).send(entidad))
            .catch((err) => res.status(400).send(
                {
                    "error": "No se pudo editar el comercio verifique los datos",
                    "datos": req.body
                }
            ));
    } else {
        const verificando = await comercio.findById(req.params.id)
        req.body.categoria = verificando.categoria;

        await comercio.findByIdAndUpdate(req.params.id, req.body)
            .then((entidad) => res.status(200).send(entidad))
            .catch((err) => res.status(400).send(
                {
                    "error": "No se pudo editar el comercio",
                    "datos": req.body
                }
            ));
    }
};
/**
 * DELETE de una publicacion
 */
controlador.delete = async (req, res) => {

};
/**
 * LIKE en la publicacion
 */
controlador.like = async (req, res) => {
    const publicacion = await Detalle.findOne({ pelicula: req.params.id });
    console.log(publicacion);
    if (publicacion) {
        publicacion.likes = publicacion.likes + 1;
        await publicacion.save();
        res.json({ likes: publicacion.likes });
    } else {
        res.status(500).send({ 
            "error": "No se puede dar like intente más tarde cuando termine su baneo",
            "risaburlona": "XD"
         });
    }
};
/**
 * POST de un Comentario en la publicacion
 */
controlador.comment = async (req, res) => {
    const publicacion = await Detalle.findOne({ pelicula: req.params.id });
    if (publicacion) {
        const newComment = new Comentario(req.body);
        newComment.detalle = publicacion._id;
        await newComment.save()
        .then((entidad) => res.status(200).send({
            "menssage": "Su comentario ha sido agregado!.",
            "consulta": "Estamos comprobando que cumpla con nuestras normas de convivencia!.",
            "Datos":entidad
        }))
        .catch((err) => res.status(400).send({
            "error": "No se pudo publicar tu comentario te vamos a banear gil",
            "datos": req.body
        }));
    } else {
        res.redirect("/");
    }
};

export default controlador;