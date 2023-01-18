import { Router } from "express";
import {
  createDespacho,
  getDespacho,
  getDespachos,
  updateDespacho,
} from "../controllers/despachos.controller";
import { validateToken, isAdmin } from "../middlewares/verifytoken"


const router = Router();

router.route("/").get([validateToken, isAdmin], getDespachos).post(createDespacho);
router.route("/:id").get(getDespacho).put(updateDespacho);

export default router;
