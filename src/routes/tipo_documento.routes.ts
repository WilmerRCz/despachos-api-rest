import { Router } from "express";
import { getTipoDocumento } from "../controllers/tipo_documento";
import {
  checkRoles,
  validateToken,
} from "../middlewares/verifytoken";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'

const router = Router();

const {Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles


router
  .route("/")
  .get([validateToken, checkRoles([Administrador, Coordinador,Despachador, Lector])], getTipoDocumento);

  export default router;