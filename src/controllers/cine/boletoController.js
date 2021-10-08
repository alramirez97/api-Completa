import Boleto from '../../models/cine/boleto.js';
import Categoria from '../../models/comercio/categoria.js';

const controlador = {};

controlador.listado= async (req,res)=>{
    console.log("Ejecutando el FIND")
    await Boleto.find()
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No hay datos de boletos",
        }
        
        ));
};

controlador.uno= async (req,res)=>{
    console.log("Consulta individual")
    await Boleto.findById(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"Boleto no encontrado",
            "id":req.params.id
        }
        
        ));
};

controlador.create = async (req, res)=>{

    const {precio, numBoleto}=req.body;
    const newBoleto = new Boleto(req.body);

          
    await newBoleto.save()
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No se pudo guardar la boleta",
            "datos":req.body
        }
        
        ));
};


controlador.editar= async (req,res)=>{
    
    console.log("Actualizando Boleto")
    await Boleto.findByIdAndUpdate(req.params.id, req.body)
    res.json({"status":"Boleto Actualizado"})
}


controlador.eliminar= async (req,res)=>{
    console.log("Eliminando Boleto")
    await Boleto.findByIdAndDelete(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No se pudo eliminar el boleto o no existe",
            "id":req.params.id
        }
        
        ));
};


export default controlador