import  Express  from "express";
import Morgan from "morgan";
import RutasComercio from "./src/routes/comercio/comercio.routes.js";
import RutasUsuario from   "./src/routes/comercio/usuario.routes.js";
import RutasBoleto from "./src/routes/cine/boleto.routes.js";
import RutasAuth from   "./src/routes/comercio/autenticar.routes.js";
import RutasPeliculas from './src/routes/cine/pelicula.routes.js';
import RutasReservacion from './src/routes/cine/reservacion.routes.js';
import fetch from 'node-fetch'
import cors from 'cors'
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { createRoles, createAdmin, createCategoria, createSala, createHorario } from "./src/libs/configInit.js";

createRoles();
createAdmin();
createCategoria();
createSala();
createHorario();


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de comercios",
      version: "1.0.0",
      description:
        "Esta es una API para poder encontrar informacion de los comercios",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/comercio/*.js"],
};
const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true})); 
app.use(Morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method', 'x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    })
app.get("/comentarioExtra", async (req,response)=>{
  await fetch("https://comentario-random.herokuapp.com/")
  .then((resp) => {
      return resp.json()
  }).then((res) => {
      response.status(200).send(res)
  })
})
    
app.use(RutasComercio)
app.use(RutasUsuario)
app.use(RutasAuth)
app.use(RutasPeliculas)
app.use(RutasBoleto)
app.use(RutasReservacion)
app.set('puerto', process.env.PORT || 3000)



const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));




//GET con  
app.get("/",(req,res)=>{
    res.send("hola mongo");
})




export default app
