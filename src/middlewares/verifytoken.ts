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
      process.env.SECRET_KEY as string
    );

    req.cookies = tokenValid;
    next();
  } catch (error) {
    return res.status(404).json({
      message: "Token Invalido",
    });
  }
}

export const checkRoles = (roles: number[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.cookies;

    if (!token.privilegio) {
      return res.status(403).json({ message: 'Acceso denegado. Usuario no autenticado.' });
    }

    if (!roles.includes(token.privilegio)) {
      return res.status(403).json({ message: 'Acceso denegado. No posees los permisos necesarios.' });
    }

    next();
  }
}
