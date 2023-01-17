import { Router } from "express";
import { loginUser } from "../controllers/login.controller";

const router = Router();

router.route("/").post(loginUser);

export default router;
