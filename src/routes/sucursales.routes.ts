import { Router } from "express";
import { getSucursales, createSucursal, getSucursal, deleteSucursal, updateSucursal } from "../controllers/sucursales.controller";

const router = Router();

router.route("/").get(getSucursales).post(createSucursal);
router.route("/:id").get(getSucursal).delete(deleteSucursal).put(updateSucursal)

export default router;
