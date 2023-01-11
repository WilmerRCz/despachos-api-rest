import { json, Request, Response } from "express";
import { connect } from "../database";

export async function getSucursales(req: Request, res: Response) {
  const conn = await connect();

  const sucursales = await conn.query("SELECT * FROM sucursales");
  res.json(sucursales[0]);
}
