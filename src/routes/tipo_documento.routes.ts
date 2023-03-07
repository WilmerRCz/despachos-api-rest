import { Router } from "express";
import { getTipoDocumento } from "../controllers/tipo_documento";
import {
  isAdminOCoordinadorOLector,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/")
  .get([validateToken, isAdminOCoordinadorOLector], getTipoDocumento);

  export default router;