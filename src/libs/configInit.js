import Role from "../models/comercio/roles.js";
import Usuario from "../models/comercio/usuario.js";
import Categoria from "../models/comercio/categoria.js";
import Sala from "../models/cine/salas.js";
import Horario from "../models/cine/horario.js";

import bcrypt from "bcryptjs";

/**
 * Aqui estan las configuraciones por defecto de los roles
 */
export const createRoles = async () => {
  try {
    // contando datos de los roles
    const count = await Role.estimatedDocumentCount();

    // Verificando si hay roles
    if (count > 0) return;

    // Creando roles por defecto
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "supervisor" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
/**
 * Aqui estan las configuraciones por defecto de el usuario
 */
export const createAdmin = async () => {
  // check for an existing admin user
  const user = await Usuario.findOne({ email: "admin@localhost" });
  // get roles _id
  const rol = await Role.find({ name: { $in: ["admin", "supervisor"] } });

  if (!user) {
    // create a new admin user
    await Usuario.create({
      username: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      rol: rol.map((role) => role._id),
    });
    console.log('Usuario admin creado!')
  }
};
/**
 * Aqui estan las configuraciones por defecto de las salas
 */
export const createSala = async () => {
  
  try {
    // Contando datos de la coleccion sala
    const count = await Sala.estimatedDocumentCount();

    // Verificando si hay salas
    if (count > 0) return;

    // Creando salas por defecto
    const values = await Promise.all([
      new Sala({ sala: "Sala 01" }).save(),
      new Sala({ sala: "Sala 02" }).save(),
      new Sala({ sala: "Sala 03" }).save(),
      new Sala({ sala: "Sala 04" }).save(),
      new Sala({ sala: "Sala 05" }).save(),
      new Sala({ sala: "Sala 06" }).save(),
      new Sala({ sala: "Sala 07" }).save(),
      new Sala({ sala: "Sala 08" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
/**
 * Aqui estan las configuraciones por defecto de las categorias
 */
export const createCategoria = async () => {
  
  try {
    // Contando datos de la Categoria
    const count = await Categoria.estimatedDocumentCount();

    // Verificando si hay categorias
    if (count > 0) return;

    // Creando categorias por defecto
    const values = await Promise.all([
      new Categoria({ categoria: "Ropa" }).save(),
      new Categoria({ categoria: "Zapatos" }).save(),
      new Categoria({ categoria: "Cosmeticos" }).save(),
      new Categoria({ categoria: "Celulares" }).save(),
      new Categoria({ categoria: "Comida" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
/**
 * Aqui estan las configuraciones por defecto de el horario
 */
export const createHorario = async () => {
  
  try {
    // Contando datos de la coleccion sala
    const count = await Horario.estimatedDocumentCount();

    // Verificando si hay salas
    if (count > 0) return;

    // Creando salas por defecto
    const values = await Promise.all([
      new Horario({ hora: "10:00 AM" }).save(),
      new Horario({ hora: "11:00 AM" }).save(),
      new Horario({ hora: "12:00 AM" }).save(),
      new Horario({ hora: "1:00 PM" }).save(),
      new Horario({ hora: "2:00 PM" }).save(),
      new Horario({ hora: "3:00 PM" }).save(),
      new Horario({ hora: "4:00 PM" }).save(),
      new Horario({ hora: "5:00 PM" }).save(),
      new Horario({ hora: "6:00 PM" }).save(),
      new Horario({ hora: "7:00 PM" }).save(),
      new Horario({ hora: "8:00 PM" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};