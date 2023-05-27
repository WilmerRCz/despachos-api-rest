import { Router } from "express";
import { getPrivilegios } from "../controllers/privilegio.controller";

import {
  isAdminOCoordinador,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/")
  .get([validateToken, isAdminOCoordinador], getPrivilegios);

  export default router;