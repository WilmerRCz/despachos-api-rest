import { Router } from "express";
import { getDespacho, getDespachos } from "../controllers/despachos.controller";


const router = Router();

router.route("/").get(getDespachos)
router.route("/:id").get(getDespacho)

export default router;