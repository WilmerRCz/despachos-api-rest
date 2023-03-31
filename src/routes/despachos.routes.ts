import { Router } from "express";
import {
  createDespacho,
  getDespacho,
  getDespachos,
  updateDespacho,
} from "../controllers/despachos.controller";
import {
  validateToken,
  isAdminOCoordinador,
  isAdminOCoordinadorODespachador,
  isAdminOCoordinadorOLector,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/")
  .get([validateToken, isAdminOCoordinadorOLector], getDespachos)
  .post([validateToken, isAdminOCoordinador], createDespacho);
router
  .route("/:id")
  .get([validateToken, isAdminOCoordinador], getDespacho)
  .put([validateToken, isAdminOCoordinadorODespachador], updateDespacho);

export default router;
