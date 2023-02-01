import { Router } from "express";
import {
  getSucursales,
  createSucursal,
  getSucursal,
  deleteSucursal,
  updateSucursal,
  getSucursalesActivas,
} from "../controllers/sucursales.controller";
import {
  isAdmin,
  isAdminOCoordinador,
  isAdminOCoordinadorOLector,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/activas")
  .get([validateToken, isAdminOCoordinadorOLector], getSucursalesActivas);
router
  .route("/")
  .get([validateToken, isAdminOCoordinadorOLector], getSucursales)
  .post([validateToken, isAdminOCoordinador], createSucursal);
router
  .route("/:id")
  .get([validateToken, isAdminOCoordinadorOLector], getSucursal)
  .delete([validateToken, isAdmin], deleteSucursal)
  .put([validateToken, isAdminOCoordinador], updateSucursal);

export default router;
