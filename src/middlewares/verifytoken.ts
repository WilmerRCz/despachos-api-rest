import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const headerToken = req.headers["authorization"];

    if (!headerToken || !headerToken.startsWith("Bearer ")) {
      return res.status(404).json({
        message: "No token",
      });
    }
    const extractToken = headerToken.split(" ");
    const bearerToken = extractToken[1];
    const tokenValid = jwt.verify(
      bearerToken,
      process.env.SECRET_KEY || "Dima4574."
    );

    req.cookies = tokenValid;
    next();
  } catch (error) {
    return res.status(404).json({
      message: "Token Invalido",
    });
  }
}


export async function isAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies;
  try {
      if (token.privilegio == 1) {
    next();
  } else {
    return res.status(403).json({
      message: "Usuario no autorizado",
    });
  }
  } catch (error) {
    return res.status(500).json({
      message: "Error al verificar privilegio",
    });
  }
}


export async function isAdminOCoordinador(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies;
  try {
      if (token.privilegio == 1 || token.privilegio == 2) {
    next();
  } else {
    return res.status(403).json({
      message: "Usuario no autorizado",
    });
  }
  } catch (error) {
    return res.status(500).json({
      message: "Error al verificar privilegio",
    });
  }
}

export async function isAdminOCoordinadorODespachador(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies;
  try {
      if (token.privilegio == 1 || token.privilegio == 2 || token.privilegio == 3) {
    next();
  } else {
    return res.status(403).json({
      message: "Usuario no autorizado",
    });
  }
  } catch (error) {
    return res.status(500).json({
      message: "Error al verificar privilegio",
    });
  }
}

export async function isAdminOCoordinadorOLector(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies;
  try {
      if (token.privilegio == 1 || token.privilegio == 2 || token.privilegio == 4) {
    next();
  } else {
    return res.status(403).json({
      message: "Usuario no autorizado",
    });
  }
  } catch (error) {
    return res.status(500).json({
      message: "Error al verificar privilegio",
    });
  }
}



