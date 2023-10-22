import { Router } from "express";
import {
  getSucursales,
  createSucursal,
  getSucursal,
  deleteSucursal,
  updateSucursal,
  getSucursalesActivas,
  getSucursalesExcel,
} from "../controllers/sucursales.controller";
import {
  checkRoles,
  validateToken,
} from "../middlewares/verifytoken";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'

const router = Router();

const {Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles


router
  .route("/activas")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getSucursalesActivas);
router
  .route("/")
  .get([validateToken, checkRoles([Administrador, Coordinador,Despachador, Lector])], getSucursales)
  .post([validateToken, checkRoles([Administrador, Coordinador])], createSucursal);
  router
  .route("/sucursalesexcel")
  .get([validateToken, checkRoles([Administrador, Coordinador, Lector])], getSucursalesExcel)
router
  .route("/:id")
  .get([validateToken, checkRoles([Administrador, Coordinador,Despachador, Lector])], getSucursal)
  .put([validateToken, checkRoles([Administrador, Coordinador])], updateSucursal)
  .delete([validateToken, checkRoles([Administrador, Coordinador])], deleteSucursal)

export default router;
