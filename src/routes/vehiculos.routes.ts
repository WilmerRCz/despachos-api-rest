import { Router } from "express";
import {
  getVehiculos,
  createVehiculo,
  getVehiculo,
  updateVehiculo,
  deleteVehiculo,
  getVehiculosActivos,
} from "../controllers/vehiculos.controller";
import {
  checkRoles,
  validateToken,
} from "../middlewares/verifytoken";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'

const router = Router();

const {Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles


router
  .route("/activos")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getVehiculosActivos);
router
  .route("/")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getVehiculos)
  .post([validateToken, checkRoles([Administrador, Coordinador])], createVehiculo);
router
  .route("/:id")
  .get([validateToken, checkRoles([Administrador, Coordinador, Despachador, Lector])], getVehiculo)
  .put([validateToken, checkRoles([Administrador, Coordinador])], updateVehiculo)
  .delete([validateToken, checkRoles([Administrador, Coordinador])], deleteVehiculo);

export default router;
