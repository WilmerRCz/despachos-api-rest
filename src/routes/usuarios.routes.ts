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
import {
  isAdmin,
  isAdminOCoordinador,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/activos")
  .get([validateToken, isAdminOCoordinador], getUsuariosActivos);
router
  .route("/activos/despachadores")
  .get([validateToken, isAdminOCoordinador], getDespachadoresActivos);
router
  .route("/")
  .get([validateToken, isAdminOCoordinador], getUsuarios)
  .post([validateToken, isAdminOCoordinador], createUsuario);
router
  .route("/:id")
  .get([validateToken, isAdminOCoordinador], getUsuario)
  .put([validateToken, isAdminOCoordinador], updateUsuario)
  .delete([validateToken, isAdmin], deleteUsuario);

export default router;
