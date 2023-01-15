import { Router } from "express";
import { createDespacho, getDespacho, getDespachos, updateDespacho } from "../controllers/despachos.controller";


const router = Router();

router.route("/").get(getDespachos).post(createDespacho)
router.route("/:id").get(getDespacho).put(updateDespacho)

export default router;