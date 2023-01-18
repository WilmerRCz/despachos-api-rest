import { Router } from "express";
import {
  createDespacho,
  getDespacho,
  getDespachos,
  updateDespacho,
} from "../controllers/despachos.controller";
import {
  validateToken,
  isAdmin,
  isAdminOCoordinador,
  isAdminOCoordinadorODespachador,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/")
  .get([validateToken, isAdmin], getDespachos)
  .post([validateToken, isAdminOCoordinador], createDespacho);
router
  .route("/:id")
  .get([validateToken, isAdminOCoordinador], getDespacho)
  .put([validateToken, isAdminOCoordinadorODespachador], updateDespacho);

export default router;
