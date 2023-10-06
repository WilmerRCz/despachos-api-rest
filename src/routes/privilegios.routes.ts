import { Router } from "express";
import { getPrivilegios } from "../controllers/privilegio.controller";

import {
  checkRoles,
  validateToken,
} from "../middlewares/verifytoken";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'

const router = Router();

const {Administrador, Coordinador} = DiccionarioRoles


router
  .route("/")
  .get([validateToken, checkRoles([Administrador, Coordinador])], getPrivilegios);

  export default router;