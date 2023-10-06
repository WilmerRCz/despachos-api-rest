import { Router } from "express";
import {
  createUsuario,
  deleteUsuario,
  getDespachadoresActivos,
  getUsuario,
  getUsuarios,
  getUsuariosActivos,
  updateUsuario,
} from "../controllers/usuarios.controller";
import {
  checkRoles,
  validateToken,
} from "../middlewares/verifytoken";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'

const router = Router();

const {Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles

router
  .route("/activos")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getUsuariosActivos);
router
  .route("/activos/despachadores")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getDespachadoresActivos);
router
  .route("/")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getUsuarios)
  .post([validateToken, checkRoles([Administrador, Coordinador])], createUsuario);
router
  .route("/:id")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getUsuario)
  .put([validateToken, checkRoles([Administrador, Coordinador])], updateUsuario)
  .delete([validateToken, checkRoles([Administrador, Coordinador])], deleteUsuario);

export default router;
