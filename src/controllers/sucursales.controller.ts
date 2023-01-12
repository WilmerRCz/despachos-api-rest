import { Request, Response } from "express";
import { connect } from "../database";
import { Sucursales } from "../interface/Sucursales";

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
    const conn = await connect();
    await conn.query("INSERT INTO sucursales SET ?", [newSucursal]);
    return res.json({
      message: "Sucursal Creada",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al crear una sucursal",
    });
  }
}

export async function getSucursal(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const sucursal = await conn.query(
      "SELECT * FROM sucursales WHERE id_sucursal = ?",
      [id]
    );
    console.log(sucursal)
    if(sucursal[0] = []) {
      res.json({
        message: "La sucursal no existe"
      })
    }else{
      return res.json(sucursal[0]);
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
    const conn = await connect();
    conn.query("UPDATE sucursales SET ? WHERE id_sucursal = ?", [
      updateSucursal,
      id,
    ]);
    return res.json({
      message: "Sucursal editada",
    });
  } catch (error) {
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
