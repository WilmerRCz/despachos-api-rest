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
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/activas")
  .get([validateToken, isAdminOCoordinador], getSucursalesActivas);
router
  .route("/")
  .get([validateToken, isAdminOCoordinador], getSucursales)
  .post([validateToken, isAdminOCoordinador], createSucursal);
router
  .route("/:id")
  .get([validateToken, isAdminOCoordinador], getSucursal)
  .delete([validateToken, isAdmin], deleteSucursal)
  .put([validateToken, isAdminOCoordinador], updateSucursal);

export default router;
