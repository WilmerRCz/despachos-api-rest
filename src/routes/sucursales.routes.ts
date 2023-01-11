import { Router } from "express";
import { getSucursales, createSucursal } from "../controllers/sucursales.controller";

const router = Router();

router.route("/").get(getSucursales).post(createSucursal);

export default router;
