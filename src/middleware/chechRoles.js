import usuario from "../models/comercio/usuario.js";
import { Roles } from "../models/comercio/roles.js";
import { Categorias } from "../models/comercio/categoria.js";

const chechRole = {};

chechRole.checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const user = await usuario.findOne({ username: req.body.username });
    if (user)
      return res.status(400).json({ message: "Ya existe un usuario con este nombre" });
    const email = await usuario.findOne({ email: req.body.email });
    if (email)
      return res.status(400).json({ message: "Este email ya esta registrado" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

chechRole.checkRolesExisted = (req, res, next) => {
  if (req.body.rol) {
    if (req.body.rol === 'a') {
      req.body.rol == 'admin'
      for (let i = 0; i < req.body.rol.length; i++) {
        if (!Roles.includes(req.body.rol[i])) {
          return res.status(400).json({
            message: `El rol ${req.body.rol[i]} no existe pruebe con admin, supervisor o user`,
          });
        }
      }
    }
    if (req.body.rol === 's') {
      req.body.rol == 'supervisor'
      for (let i = 0; i < req.body.rol.length; i++) {
        if (!Roles.includes(req.body.rol[i])) {
          return res.status(400).json({
            message: `El rol ${req.body.rol[i]} no existe pruebe con admin, supervisor o user`,
          });
        }
      }
    }
    if (req.body.rol === 'u') {
      req.body.rol == 'user'
      for (let i = 0; i < req.body.rol.length; i++) {
        if (!Roles.includes(req.body.rol[i])) {
          return res.status(400).json({
            message: `El rol ${req.body.rol[i]} no existe pruebe con admin, supervisor o user`,
          });
        }
      }
    }
  }

  next();
};

chechRole.checkCategoriaExisted = (req, res, next) => {
  if (req.body.categoria) {
    if ((req.body.categoria === 'R')|| (req.body.categoria === 'Ropa')) {
      req.body.categoria == 'Ropa'
      for (let i = 0; i < req.body.categoria.length; i++) {
        if (!Categorias.includes(req.body.categoria[i])) {
          return res.status(400).json({
            message: `La categoria ${req.body.categoria[i]} no existe pruebe con datos existentes
            Ropa, Zapatos, Cosmeticos, Celulares o Comida`
          });
        }
      }
    }
    if ((req.body.categoria === 'Z') || (req.body.categoria === 'Zapatos')) {
      req.body.categoria == 'Zapatos'
      for (let i = 0; i < req.body.categoria.length; i++) {
        if (!Categorias.includes(req.body.categoria[i])) {
          return res.status(400).json({
            message: `La categoria ${req.body.categoria[i]} no existe pruebe con datos existentes
            Ropa, Zapatos, Cosmeticos, Celulares o Comida`
          });
        }
      }
    }
    if ((req.body.categoria === 'C') || (req.body.categoria === 'Cosmeticos')) {
      req.body.categoria == 'Cosmeticos'
      for (let i = 0; i < req.body.categoria.length; i++) {
        if (!Categorias.includes(req.body.categoria[i])) {
          return res.status(400).json({
            message: `La categoria ${req.body.categoria[i]} no existe pruebe con datos existentes
            Ropa, Zapatos, Cosmeticos, Celulares o Comida`
          });
        }
      }
    }
    if ((req.body.categoria === 'C') || (re.body.categoria === 'Celulares')) {
      req.body.categoria == 'Celulares'
      for (let i = 0; i < req.body.categoria.length; i++) {
        if (!Categorias.includes(req.body.categoria[i])) {
          return res.status(400).json({
            message: `La categoria ${req.body.categoria[i]} no existe pruebe con datos existentes
            Ropa, Zapatos, Cosmeticos, Celulares o Comida`
          });
        }
      }
    }
    if ((req.body.categoria === 'C') || (re.body.categoria === 'Comida')) {
      req.body.categoria == 'Comida'
      for (let i = 0; i < req.body.categoria.length; i++) {
        if (!Categorias.includes(req.body.categoria[i])) {
          return res.status(400).json({
            message: `La categoria ${req.body.categoria[i]} no existe pruebe con datos existentes
            Ropa, Zapatos, Cosmeticos, Celulares o Comida`
          });
        }
      }
    }
  }

  next();
};

export default chechRole