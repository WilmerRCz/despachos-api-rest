import { Router } from "express";
import { getEstadoActividad } from "../controllers/estado_actividad";

import {
  isAdminOCoordinadorOLector,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/")
  .get([validateToken, isAdminOCoordinadorOLector], getEstadoActividad);

  export default router;