import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from "../controllers/usuarios.controller";

const router = Router();

router.route("/").get(getUsuarios).post(createUsuario)
router.route("/:id").get(getUsuario).put(updateUsuario).delete(deleteUsuario)

export default router;
