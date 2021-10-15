import Pelicula from '../../models/cine/pelicula.js';
import Horario from '../../models/cine/horario.js';
import Sala from '../../models/cine/salas.js';

const controlador = {};

/**
 * Listando todas las peliculas
*/
controlador.listado = async (req, res) => {
    console.log("Ejecutando el FIND")
    await Pelicula.find()
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No hay datos de peliculas",
            }

        ));
};
/**
 * Listando todas las horas 
*/
controlador.horarios = async (req, res) => {
    console.log("Ejecutando el FIND")
    await Horario.find()
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No hay datos de horarios",
            }

        ));
};
/**
 * Listando todas las salas
*/
controlador.salas = async (req, res) => {
    console.log("Ejecutando el FIND")
    await Sala.find()
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No hay datos de salas",
            }

        ));
};
/**
 * Mostrar una pelicula por id
*/
controlador.uno = async (req, res) => {
    console.log("Consulta individual")
    await Pelicula.findById(req.params.id)
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "Comercio no encontrado",
                "id": req.params.id
            }

        ));
}
/**
 * Mostrar una pelicula por nombre
*/
controlador.buscarTitulo = async (req, res) => {
    console.log("Consulta por nombre")
    const { titulo } = req.body;
    await Pelicula.find({ titulo: {$regex: req.body.titulo} })
        .then((entidad) => res.status(200).send({
            "menssage": "Las peliculas que coinciden con el nombre son:",
            "Datos": entidad
        }))
        .catch((err) => res.status(400).send(
            {
                "error": "Comercio no encontrado",
                "id": titulo
            }

        ));
};
/**
 * Crear una nueva pelicula
*/
controlador.create = async (req, res) => {
    const newPelicula = new Pelicula(req.body);
    await newPelicula.save()
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No se pudo guardar la pelicula",
                "datos": req.body
            }));
}
/**
 * Actualizar una pelicula
*/
controlador.actualizar = async (req, res) => {
    console.log("Actualizando una pelicula")
    await Pelicula.findByIdAndUpdate(req.params.id, req.body)
        .then((entidad) => res.status(200).send({
            "menssage": "Se actualizo exitosamente",
            "Datos": entidad
        }))
        .catch((err) => res.status(400).send(
            {
                "error": "No se pudo actualizar la pelicula",
                "datos": req.body
            }));
}
/**
 * Elimnando una nueva pelicula
*/
controlador.delete = async (req, res) => {
    console.log("Eliminando Pelicula")
    await Pelicula.findByIdAndDelete(req.params.id)
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No se pudo eliminar el usuario o no existe",
                "id": req.params.id
            }

        ));
}

export default controlador