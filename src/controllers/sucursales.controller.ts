import { Request, Response } from "express";
import { connect } from "../database";
import { Sucursales } from "../interface/Sucursales";
import { createSucursalSchema, updateSucursalSchema } from "../schemas/sucursalSchema";
import { ZodError } from 'zod';

export async function getSucursales(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const conn = await connect();

    const sucursales = await conn.query("SELECT * FROM sucursales");
    return res.json(sucursales[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al consultar por las sucursales",
    });
  }
}

export async function createSucursal(req: Request, res: Response) {
  const newSucursal: Sucursales = req.body;
  try {
    createSucursalSchema.parse(newSucursal)
    const conn = await connect();
    await conn.query("INSERT INTO sucursales SET ?", [newSucursal]);
    return res.json({
      message: "Sucursal Creada",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al crear una sucursal",
    });
  }
}

export async function getSucursal(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const [sucursal] = await conn.query(
      "SELECT * FROM sucursales WHERE id_sucursal = ?",
      [id]
    );
    //COMPARAR VALIDACION CON ZOD Y ARRAYS VACIO
    const result = JSON.parse(JSON.stringify(sucursal));
    if (result <= 0) {
      res.status(404).json({
        message: "Sucursal no encontrada",
      });
    } else {
      return res.json(result);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener la sucursal",
    });
  }
}

export async function updateSucursal(req: Request, res: Response) {
  const id = req.params.id;
  const updateSucursal: Sucursales = req.body;
  try {
    updateSucursalSchema.parse(updateSucursal)
    const conn = await connect();
    await conn.query("UPDATE sucursales SET ? WHERE id_sucursal = ?", [
      updateSucursal,
      id,
    ]);
    //VALIDAR SI RUTA ES DIFERENTE Y SI SE ENVIA UN DATO INEXISTENTE
    return res.json({
      message: "Sucursal editada",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al editar la sucursal",
    });
  }
}

export async function deleteSucursal(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    await conn.query("DELETE FROM sucursales WHERE id_sucursal = ?", [id]);
    return res.json({
      message: "Sucursal eliminada correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al eliminar la sucursal",
    });
  }
}

export async function getSucursalesActivas(req: Request, res: Response) {
  try {
    const conn = await connect();
    const sucursalesActivas = await conn.query(
      "SELECT * FROM sucursales WHERE estado_sucursal = ?",
      [1]
    );
    return res.json(sucursalesActivas[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al encontrar sucursales activas",
    });
  }
}
