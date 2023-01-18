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
  if (token.privilegio == 1) {
    next();
  } else {
    return res.status(403).json({
      message: "Usuario no autorizado",
    });
  }
}

export async function isCoordinador(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export async function isDespachador(
  req: Request,
  res: Response,
  next: NextFunction
) {}
