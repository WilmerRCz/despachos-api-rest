import { Router } from "express";
import {
  createUsuario,
  deleteUsuario,
  getDespachadoresActivos,
  getUsuario,
  getUsuarios,
  getUsuariosActivos,
  updateUsuario,
} from "../controllers/usuarios.controller";

const router = Router();

router.route("/activos").get(getUsuariosActivos);
router.route("/activos/despachadores").get(getDespachadoresActivos);
router.route("/").get(getUsuarios).post(createUsuario);
router.route("/:id").get(getUsuario).put(updateUsuario).delete(deleteUsuario);

export default router;
