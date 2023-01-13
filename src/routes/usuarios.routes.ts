import { Router } from "express";
import {
  createUsuario,
  deleteUsuario,
  getUsuario,
  getUsuarios,
  getUsuariosActivos,
  updateUsuario,
} from "../controllers/usuarios.controller";

const router = Router();

router.route("/").get(getUsuarios).post(createUsuario);
router.route("/:id").get(getUsuario).put(updateUsuario).delete(deleteUsuario);
router.route("/activos").get(getUsuariosActivos);

export default router;
