import { Request, Response } from "express";
import { connect } from "../database";
import { Usuarios } from "../interface/Usuarios";

export async function getUsuarios(req: Request, res: Response) {
  try {
    const conn = await connect();
    const usuarios = await conn.query("SELECT * FROM usuarios")
    return res.json(usuarios[0])
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

export async function getUsuario(req: Request, res: Response) {}

export async function updateUsuario(req: Request, res: Response) {}

export async function deleteUsuario(req: Request, res: Response) {}
