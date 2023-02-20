import { Router } from "express";
import { getComunas } from "../controllers/comunas.controller";
import {
  isAdminOCoordinadorOLector,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/")
  .get([validateToken, isAdminOCoordinadorOLector], getComunas);

  export default router;