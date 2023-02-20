import { Router } from "express";
import { getCelulares } from "../controllers/celulares";
import {
  isAdminOCoordinadorOLector,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/")
  .get([validateToken, isAdminOCoordinadorOLector], getCelulares);

  export default router;