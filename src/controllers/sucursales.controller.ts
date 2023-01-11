import { json, Request, Response } from "express";
import { connect } from "../database";
import { Sucursales } from "../interface/Sucursales";
import { indexWelcome } from "./index.controller";

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
  const conn = await connect();
  await conn.query("INSERT INTO sucursales SET ?", [newSucursal]);
  return res.json({
    message: "Sucursal Creada",
  });
}

export async function getSucursal(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.id;
  const conn = await connect();
  const sucursal = await conn.query(
    "SELECT * FROM sucursales WHERE id_sucursal = ?",
    [id]
  );
  return res.json(sucursal[0]);
}

export async function updateSucursal(req: Request, res: Response) {
  const id = req.params.id;
  const updateSucursal: Sucursales = req.body;
  const conn = await connect();
  conn.query("UPDATE sucursales SET ? WHERE id_sucursal = ?", [
    updateSucursal,
    id,
  ]);
  return res.json({
    message: "Sucursal editada",
  });
}

export async function deleteSucursal(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM sucursales WHERE id_sucursal = ?", [id]);
  return res.json({
    message: "Sucursal eliminada correctamente",
  });
}
