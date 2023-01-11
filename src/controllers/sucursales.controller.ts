import { json, Request, Response } from "express";
import { connect } from "../database";
import { Sucursales } from "../interface/Sucursales";

export async function getSucursales(
  req: Request,
  res: Response
): Promise<Response> {
  const conn = await connect();

  const sucursales = await conn.query("SELECT * FROM sucursales");
  return res.json(sucursales[0]);
}

export async function createSucursal(req: Request, res: Response) {
  const newSucursal: Sucursales = req.body;
  const conn = await connect()
  await conn.query('INSERT INTO sucursales SET ?', [newSucursal])
  return res.json({
    messagge: "Sucursal Creada",
  });
}
