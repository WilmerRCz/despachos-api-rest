import { Router } from "express";
import { getSucursales } from "../controllers/sucursales.controller";

const router = Router();

router.route("/").get(getSucursales);

export default router;
