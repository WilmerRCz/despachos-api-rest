import { Router } from "express";
import { getVehiculos, createVehiculo, getVehiculo } from "../controllers/vehiculos.controller";

const router = Router()

router.route("/").get(getVehiculos).post(createVehiculo)
router.route("/:id").get(getVehiculo)

export default router