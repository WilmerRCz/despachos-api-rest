import { Request, Response } from "express";
import { connect } from "../database";
import { loginSchema } from "../schemas/loginSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";

export async function loginUser(req: Request, res: Response) {
  const { correo, contrasena } = req.body;
  try {
    loginSchema.parse({ correo, contrasena });
    const conn = await connect();
    const [usuario] = await conn.query(
      "SELECT * FROM usuarios WHERE correo = ? AND estado_usuario = ?",
      [correo, 1]
    );
    const usuarioEncontrado = JSON.parse(JSON.stringify(usuario));

    if (usuarioEncontrado <= 0) {
      return res.status(404).json({
        message: "Correo incorrecto o contraseña incorrectas",
      });
    }
    const contrasenaUsuario = usuarioEncontrado[0].contrasena;
    bcrypt.compare(contrasena, contrasenaUsuario).then((result) => {
      if (!result) {
        return res.status(404).json({
          message: "Correo incorrecto o contraseña incorrectas",
        });
      }
      //Generar Token
      const usuarioToken = usuarioEncontrado[0];
      const token = jwt.sign(
        {
          id: usuarioToken.id_usuario,
          nombre: usuarioToken.nombre_usuario,
          apellido: usuarioToken.apellido_usuario,
          privilegio: usuarioToken.privilegio,
          sucursal: usuarioToken.sucursal,
          auth: true
        },
        process.env.SECRET_KEY || "Dima4574.",
        { expiresIn: "168h" }
      );
      return res.json({
        message: "login exitoso",
        token: token,
      });
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Se ha producido un error al intentar iniciar sesion",
      error: error,
    });
  }
}
