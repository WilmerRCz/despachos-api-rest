import { Request, Response } from "express";
import { connect } from "../database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginUser(req: Request, res: Response) {
  const { correo, contrasena } = req.body;
  try {
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
          correo: usuarioToken.correo,
          privilegio: usuarioToken.privilegio,
          sucursal: usuarioToken.sucursal,
        },
        process.env.SECRET_KEY || "Dima4574.",
        { expiresIn: "336h" }
      );
      return res.json({
        message: "login exitoso",
        token: token,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Se ha producido un error al intentar iniciar sesion",
    });
  }
}
