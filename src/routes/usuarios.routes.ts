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
  isAdminOCoordinadorOLector,
  validateToken,
} from "../middlewares/verifytoken";

const router = Router();

router
  .route("/activos")
  .get([validateToken, isAdminOCoordinadorOLector], getUsuariosActivos);
router
  .route("/activos/despachadores")
  .get([validateToken, isAdminOCoordinadorOLector], getDespachadoresActivos);
router
  .route("/")
  .get([validateToken, isAdminOCoordinadorOLector], getUsuarios)
  .post([validateToken, isAdminOCoordinador], createUsuario);
router
  .route("/:id")
  .get([validateToken, isAdminOCoordinadorOLector], getUsuario)
  .put([validateToken, isAdminOCoordinador], updateUsuario)
  .delete([validateToken, isAdmin], deleteUsuario);

export default router;
