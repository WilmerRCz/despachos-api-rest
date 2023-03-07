import { Router } from "express";
import { getEstadoDespacho } from "../controllers/estado_despacho";
import {
  isAdminOCoordinadorOLector,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/")
  .get([validateToken, isAdminOCoordinadorOLector], getEstadoDespacho);

  export default router;