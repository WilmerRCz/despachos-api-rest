import { Router } from "express";
import { getVehiculos, createVehiculo, getVehiculo, updateVehiculo, deleteVehiculo } from "../controllers/vehiculos.controller";

const router = Router()

router.route("/").get(getVehiculos).post(createVehiculo)
router.route("/:id").get(getVehiculo).put(updateVehiculo).delete(deleteVehiculo)

export default router