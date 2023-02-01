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
  isAdmin,
  isAdminOCoordinador,
  isAdminOCoordinadorOLector,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/activos")
  .get([validateToken, isAdminOCoordinadorOLector], getVehiculosActivos);
router
  .route("/")
  .get([validateToken, isAdminOCoordinadorOLector], getVehiculos)
  .post([validateToken, isAdminOCoordinador], createVehiculo);
router
  .route("/:id")
  .get([validateToken, isAdminOCoordinador], getVehiculo)
  .put([validateToken, isAdminOCoordinador], updateVehiculo)
  .delete([validateToken, isAdmin], deleteVehiculo);

export default router;
