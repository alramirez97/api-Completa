import ReservaBoleto from '../../models/cine/reservaboletos.js';
import Boleto from '../../models/cine/boleto.js';

const controlador = {};

controlador.listado = async (req, res) => {
    console.log("Ejecutando el FIND")
    await ReservaBoleto.find().populate({ path: 'boleto', Model: 'Boleto' })
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No hay Reserva de Boletos",
            }

        ));
};



controlador.uno = async (req, res) => {
    console.log("Consulta individual")
    await ReservaBoleto.findById(req.params.id)
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "ReservaBoleto no encontrado",
                "id": req.params.id
            }

        ));
}


controlador.create = (req, res) => {
    const saveReserva = async () => {
        const numero = randomNumber();
        const Rboleto = await ReservaBoleto.find({ NVenta: numero });
        if (Rboleto.length > 0) {
            saveReserva();
        } else {
            const price = await Pelicula.find({ titulo: { $in: req.body.pelicula } });
            const precio = parseFloat(price.precioBoleto);
            const cantidad = parseFloat(req.body.cantidad);
            const precioT = (precio * cantidad);
            const newRBoleto = new saveReserva({
                NVenta: numero,
                cantidad: req.body.cantidad,
                total: precioT
            });
            if (req.body.pelicula) {
                const foundPelicula = await Pelicula.find({ titulo: { $in: req.body.pelicula } });
                newRBoleto.pelicula = foundPelicula.map(peli => peli._id);

            } else {
                res.status(400).send(
                    {
                        "error": "No se puede guardar la Pelicula",
                        "datos": req.body
                    }
                );
            }

            await newRBoleto.save()
                .then((entidad) => res.status(200).send(entidad))
                .catch((err) => res.status(400).send(
                    {
                        "error": "No se pudo guardar la Reservacion",
                        "datos": req.body
                    }
                ));
        }
    }
    saveReserva();
};


controlador.editar = async (req, res) => {

    console.log("Actualizando Reserva")
    await ReservaBoleto.findByIdAndUpdate(req.params.id, req.body)
    res.json({ "status": "Reserva Actualizado" })
}





controlador.eliminar = async (req, res) => {
    console.log("Elimina Reserva")
    await ReservaBoleto.findByIdAndDelete(req.params.id)
        .then((entidad) => res.status(200).send(entidad))
        .catch((err) => res.status(400).send(
            {
                "error": "No se pudo eliminar o no existe",
                "id": req.params.id
            }

        ));
}


export default controlador