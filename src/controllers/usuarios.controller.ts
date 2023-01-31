import { Request, Response } from "express";
import { connect } from "../database";
import bcrypt from "bcrypt";
import { Usuarios } from "../interface/Usuarios";
import {
  createUsuarioSchema,
  updateUsuarioSchema,
} from "../schemas/usuarioSchema";
import { ZodError } from "zod";

export async function getUsuarios(req: Request, res: Response) {
  try {
    const conn = await connect();
    const [usuarios] = await conn.query("SELECT * FROM usuarios");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(usuarios));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay Usuarios creados",
      });
    }
    return res.json(usuarios);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al buscar los usuarios",
    });
  }
}

export async function createUsuario(req: Request, res: Response) {
  const newUsuario: Usuarios = req.body;
  let { contrasena } = newUsuario;

  try {
    const conn = await connect();
    //VALIDANDO CAMPOS ENVIADOS AL SERVIDOR
    createUsuarioSchema.parse(newUsuario);
    //ENCRIPTANDO CONTRASEÑA
    const hashcontrasena = await bcrypt.hashSync(contrasena, 10);
    newUsuario.contrasena = hashcontrasena;

    await conn.query("INSERT INTO usuarios SET ?", [newUsuario]);
    return res.status(201).json({
      message: "Usuario creado",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al crear un usuario",
    });
  }
}

export async function getUsuario(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const [usuario] = await conn.query(
      "SELECT * FROM usuarios WHERE id_usuario = ?",
      [id]
    );
    //VALIDANDO SI EL ID EXISTE O NO
    const result = JSON.parse(JSON.stringify(usuario));
    if (result <= 0) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    } else {
      return res.status(200).json(result[0]);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener el usuario",
    });
  }
}

export async function updateUsuario(req: Request, res: Response) {
  const id = req.params.id;
  const updateUsuario: Usuarios = req.body;
  const  contrasena  = updateUsuario.contrasena;
  try {
    //VALIDANDO CAMPOS DE ENTRADA ENVIADOS AL SERVIDOR
    updateUsuarioSchema.parse(updateUsuario);
    const conn = await connect();
    //ENCRIPTANDO CONTRASEÑA
    if(contrasena){
          const hashcontrasena = await bcrypt.hashSync(contrasena, 10);
          updateUsuario.contrasena = hashcontrasena;
    }


    const [usuario] = await conn.query(
      "SELECT * FROM usuarios WHERE id_usuario = ?",
      [id]
    );
    //VALIDANDO SI EXISTE O NO EL ID
    const result = JSON.parse(JSON.stringify(usuario));
    if (result <= 0) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    await conn.query("UPDATE usuarios SET ? WHERE id_usuario = ?", [
      updateUsuario,
      id,
    ]);
    return res.status(200).json({
      message: "Usuario actualizado",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al actualizar el usuario",
    });
  }
}

export async function deleteUsuario(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const [usuario] = await conn.query(
      "DELETE FROM usuarios WHERE id_usuario = ?",
      [id]
    );
    //VALIDANDO SI EXISTE O NO EL ID
    const result = JSON.parse(JSON.stringify(usuario));
    if (result.affectedRows <= 0) {
      res.status(404).json({
        message: "Vehiculo no encontrado",
      });
    } else {
      return res.status(200).json({
        message: "Usuario eliminado",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al eliminar el usuario",
    });
  }
}

export async function getUsuariosActivos(req: Request, res: Response) {
  try {
    const conn = await connect();
    const [usuariosActivos] = await conn.query(
      "SELECT * FROM usuarios WHERE estado_usuario = ?",
      [1]
    );
    return res.status(200).json(usuariosActivos);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los usuarios activos",
    });
  }
}

export async function getDespachadoresActivos(req: Request, res: Response) {
  try {
    const conn = await connect();
    const [usuariosDespachadoresActivos] = await conn.query(
      "SELECT * FROM usuarios WHERE privilegio = ? AND estado_usuario = ?",
      [3, 1]
    );
    return res.status(200).json(usuariosDespachadoresActivos);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los despachadores activos",
    });
  }
}
