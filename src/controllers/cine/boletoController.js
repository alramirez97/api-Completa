import Boleto from '../../models/cine/boleto.js';
<<<<<<< HEAD
=======
import Categoria from '../../models/comercio/categoria.js';
import { randomNumber } from "../../libs/randonNumber.js";
import Comercio from '../../models/comercio/comercio.js';
import Pelicula from '../../models/cine/pelicula.js';
import Horario from '../../models/cine/horario.js';
import Sala from '../../models/cine/salas.js';
>>>>>>> 3c8630eb5cf5a297ee7ac2220c1d395e134a8141

import Categoria from '../../models/comercio/categoria.js';
import { randomNumber } from "../../libs/randonNumber.js";
import Comercio from '../../models/comercio/comercio.js';
import Pelicula from '../../models/cine/pelicula.js';
import Horario from '../../models/cine/horario.js';
import Sala from '../../models/cine/salas.js';
const controlador = {};

controlador.listado = async (req, res) => {
    console.log("Ejecutando el FIND")
    await Boleto.find()
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No hay datos de boletos",
            }

        ));
};

controlador.uno = async (req, res) => {
    console.log("Consulta individual")
    await Boleto.findById(req.params.id)
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "Boleto no encontrado",
                "id": req.params.id
            }

        ));
};

<<<<<<< HEAD
/*
controlador.create = async (req, res)=>{

    const {precio, numBoleto}=req.body;
    const newBoleto = new Boleto(req.body);

  
          
    await newBoleto.save()
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No se pudo guardar la boleta",
            "datos":req.body
=======
controlador.create = (req, res) => {
    const saveBoleto = async () => {
        const numero = randomNumber();
        const boleto = await Boleto.find({ numBoleto: numero });
        if (boleto.length > 0) {
            saveBoleto();
        } else {
            const precio = parseFloat(req.body.precio);
            const desc = parseFloat(req.body.descuento);
            const descPorcen = desc / 100;
            const descuento = precio * descPorcen;
            const precioTotal = precio - (precio * descPorcen);
            const newBoleto = new Boleto({
                numBoleto: numero,
                precio: req.body.precio,
                descuento: descuento,
                total: precioTotal
            });
            if (req.body.comercio) {
                const foundComercio = await Comercio.find({ nombreComercio: { $in: req.body.comercio } });
                newBoleto.comercio = foundComercio.map(comer => comer._id);
                if (req.body.pelicula) {
                    const foundPelicula = await Pelicula.find({ titulo: { $in: req.body.pelicula } });
                    newBoleto.pelicula = foundPelicula.map(peli => peli._id);
                    if (req.body.horario) {
                        const foundHorario = await Horario.find({ hora: { $in: req.body.horario } });
                        newBoleto.horario = foundHorario.map(hora => hora._id);
                        if (req.body.sala) {
                            const foundSala = await Sala.find({ sala: { $in: req.body.sala } });
                            newBoleto.sala = foundSala.map(sala => sala._id);
                        }
                        else {
                            const salas = await Sala.findOne({ sala: "Sala 01" });
                            newBoleto.sala = [salas._id];
                        }
                    }
                    else {
                        const hora = await Horario.findOne({ hora: "10:00 AM" });
                        newBoleto.horario = [hora._id];
                    }
                }
                else {
                    res.status(400).send(
                        {
                            "error": "No se puede guardar debe ingresar una pelicula",
                            "datos": req.body
                        }
                    );
                }
            }
            else {
                const comer = await Comercio.findOne({ nombreComercio: "Cine 01" });
                newBoleto.comercio = [comer._id];
            }
            await newBoleto.save()
                .then((entidad) => res.status(200).send(entidad))
                .catch((err) => res.status(400).send(
                    {
                        "error": "No se pudo guardar el boleto",
                        "datos": req.body
                    }
                ));
>>>>>>> 3c8630eb5cf5a297ee7ac2220c1d395e134a8141
        }
    }
    saveBoleto();
};
*/


controlador.create = (req, res) => {
    const saveBoleto = async () => {
        const numero = randomNumber();
        const boleto = await Boleto.find({ numBoleto: numero });
        if (boleto.length > 0) {
            saveBoleto();
        } else {
            const precio = parseFloat(req.body.precio);
            const desc = parseFloat(req.body.descuento);
            const descPorcen = desc / 100;
            const descuento = precio * descPorcen;
            const precioTotal = precio - (precio * descPorcen);
            const newBoleto = new Boleto({
                numBoleto: numero,
                precio: req.body.precio,
                descuento: descuento,
                total: precioTotal
            });
            if (req.body.comercio) {
                const foundComercio = await Comercio.find({ nombreComercio: { $in: req.body.comercio } });
                newBoleto.comercio = foundComercio.map(comer => comer._id);
                if (req.body.pelicula) {
                    const foundPelicula = await Pelicula.find({ titulo: { $in: req.body.pelicula } });
                    newBoleto.pelicula = foundPelicula.map(peli => peli._id);
                    if (req.body.horario) {
                        const foundHorario = await Horario.find({ hora: { $in: req.body.horario } });
                        newBoleto.horario = foundHorario.map(hora => hora._id);
                        if (req.body.sala) {
                            const foundSala = await Sala.find({ sala: { $in: req.body.sala } });
                            newBoleto.sala = foundSala.map(sala => sala._id);
                        }
                        else {
                            const salas = await Sala.findOne({ sala: "Sala 01" });
                            newBoleto.sala = [salas._id];
                        }
                    }
                    else {
                        const hora = await Horario.findOne({ hora: "10:00 AM" });
                        newBoleto.horario = [hora._id];
                    }
                }
                else {
                    res.status(400).send(
                        {
                            "error": "No se puede guardar debe ingresar una pelicula",
                            "datos": req.body
                        }
                    );
                }
            }
            else {
                const comer = await Comercio.findOne({ nombreComercio: "Cine 01" });
                newBoleto.comercio = [comer._id];
            }
            await newBoleto.save()
                .then((entidad) => res.status(200).send(entidad))
                .catch((err) => res.status(400).send(
                    {
                        "error": "No se pudo guardar el boleto",
                        "datos": req.body
                    }
                ));
        }
    }
    saveBoleto();
};
















controlador.editar = async (req, res) => {

    console.log("Actualizando Boleto")
    await Boleto.findByIdAndUpdate(req.params.id, req.body)
    res.json({ "status": "Boleto Actualizado" })
}


controlador.eliminar = async (req, res) => {
    console.log("Eliminando Boleto")
    await Boleto.findByIdAndDelete(req.params.id)
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No se pudo eliminar el boleto o no existe",
                "id": req.params.id
            }

        ));
};


export default controlador