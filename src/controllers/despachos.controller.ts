import { Request, Response } from "express";
import { connect } from "../database";
import { Despachos } from "../interface/Despachos";

export async function getDespachos(req: Request, res: Response) {
  try {
    const conn = await connect();
    const despachos = await conn.query("SELECT * FROM despachos");
    return res.json(despachos[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al encontrar los despachos",
    });
  }
}

export async function getDespacho(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const despacho = await conn.query(
      "SELECT * FROM despachos WHERE id_despacho = ?",
      [id]
    );
    return res.json(despacho[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener el despacho",
    });
  }
}

export async function createDespacho(req: Request, res: Response) {
  const newDespacho: Despachos = req.body;
  try {
    const conn = await connect();
    conn.query("INSERT INTO despachos SET ?", [newDespacho])
    return res.status(201).json({
      message: "Despacho creado",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al crear el despacho",
    });
  }
}

export async function updateDespacho(req:Request, res: Response) {
  const id = req.params.id;
  const updateDespacho = req.body;
  try {
    const conn = await connect()
    await conn.query("UPDATE despachos SET ? WHERE id_despacho = ?", [
      updateDespacho,
      id,
    ])
    return res.json({
      message: "Despacho actualizado",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al actualizar el despacho",
    });
  }
}
