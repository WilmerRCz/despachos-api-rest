import { Router } from "express";
import { getComunas } from "../controllers/comunas.controller";
import {
  checkRoles,
  validateToken,
} from "../middlewares/verifytoken";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'

const router = Router();


const {Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles

router
  .route("/")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getComunas);

  export default router;