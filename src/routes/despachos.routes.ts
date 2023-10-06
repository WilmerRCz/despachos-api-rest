import { Router } from "express";
import {
  createDespacho,
  deleteDespacho,
  getDespacho,
  getDespachos,
  updateDespacho,
} from "../controllers/despachos.controller";
import {
  validateToken,
  checkRoles,
} from "../middlewares/verifytoken";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'

const router = Router();

const {Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles


router
  .route("/")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getDespachos)
  .post([validateToken, checkRoles([Administrador, Coordinador])], createDespacho);
router
  .route("/:id")
  .get([validateToken, checkRoles([Administrador, Coordinador])], getDespacho)
  .put([validateToken, checkRoles([Administrador, Coordinador, Despachador])], updateDespacho)
  .delete([validateToken, checkRoles([Administrador, Coordinador])], deleteDespacho)



export default router;
