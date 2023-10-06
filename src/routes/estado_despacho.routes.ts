import { Router } from "express";
import { getEstadoDespacho } from "../controllers/estado_despacho";
import {
  checkRoles,
  validateToken,
} from "../middlewares/verifytoken";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'

const router = Router();

const {Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles

router
  .route("/")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getEstadoDespacho);

  export default router;