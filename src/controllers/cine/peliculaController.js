import Pelicula from '../../models/cine/pelicula.js';
import Categoria from '../../models/comercio/categoria.js';

const controlador = {};

controlador.listado= async (req,res)=>{
    console.log("Ejecutando el FIND")
    await Pelicula.find()
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No hay datos de peliculas",
        }
        
        ));
};
controlador.listados= async (req,res)=>{
    console.log("Ejecutando el FIND")
    await Categoria.find()
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No hay datos de peliculas",
        }
        
        ));
};
controlador.eliminar= async (req,res)=>{
    console.log("Elimina categoria")
    await Categoria.findByIdAndDelete(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No se pudo eliminar o no existe",
            "id":req.params.id
        }
        
        ));
}
/**
 * Mostrar una pelicula por id
*/
controlador.uno= async (req,res)=>{
    console.log("Consulta individual")
    await Pelicula.findById(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"Comercio no encontrado",
            "id":req.params.id
        }
        
        ));
}
/**
 * Mostrar una pelicula por nombre
*/
controlador.buscarTitulo= async (req,res)=>{
    console.log("Consulta por nombre")
    const {titulo} = req.body;
    await Pelicula.find({titulo: req.body.titulo})
    .then((entidad)=>res.status(200).send({
        "menssage": "La pelicula que busca es",
        "Datos":entidad
    }))
    .catch((err)=>res.status(400).send(
        {
            "error":"Comercio no encontrado",
            "id": titulo
        }
        
        ));
};

controlador.create = async (req, res)=>{
    const newPelicula = new Pelicula(req.body);
    await newPelicula.save()
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No se pudo guardar la pelicula",
            "datos":req.body
        }
        
        ));



}

controlador.eliminar= async (req,res)=>{
    console.log("Eliminando Pelicula")
    await Pelicula.findByIdAndDelete(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No se pudo eliminar el usuario o no existe",
            "id":req.params.id
        }
        
        ));
}

export default controlador