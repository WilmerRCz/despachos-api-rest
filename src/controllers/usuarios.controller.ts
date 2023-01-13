import { Request, Response } from "express";
import { connect } from "../database";
import { Usuarios } from "../interface/Usuarios";

export async function getUsuarios(req: Request, res: Response) {
  try {
    const conn = await connect();
    const usuarios = await conn.query("SELECT * FROM usuarios");
    return res.json(usuarios[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al buscar los usuarios",
    });
  }
}

export async function createUsuario(req: Request, res: Response) {
  const newUsuario: Usuarios = req.body;
  try {
    const conn = await connect();
    await conn.query("INSERT INTO usuarios SET ?", [newUsuario]);
    return res.status(201).json({
      message: "Usuario creado",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al crear un usuario",
    });
  }
}

export async function getUsuario(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const usuario = await conn.query(
      "SELECT * FROM usuarios WHERE id_usuario = ?",
      [id]
    );
    return res.json(usuario[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener el usuario",
    });
  }
}

export async function updateUsuario(req: Request, res: Response) {
  const id = req.params.id;
  const updateUsuario = req.body;

  try {
    const conn = await connect();
    await conn.query("UPDATE usuarios SET ? WHERE id_usuario = ?", [
      updateUsuario,
      id,
    ]);
    return res.json({
      message: "Usuario actualizado",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al actualizar el usuario",
    });
  }
}

export async function deleteUsuario(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    await conn.query("DELETE FROM usuarios WHERE id_usuario = ?", [id]);
    return res.json({
      message: "Usuario eliminado",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al eliminar el usuario",
    });
  }
}

//Revisar codigo
export async function getUsuariosActivos(req: Request, res: Response) {
  try {
    const conn = await connect();
    const usuariosActivos = await conn.query(
      "SELECT * FROM usuarios WHERE estado_usuario = ?");
    console.log(usuariosActivos);
    return res.json(usuariosActivos);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los usuarios activos",
    });
  }
}
