import { Request, Response } from "express";
import { connect } from "../database";

export async function getComunas(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const conn = await connect();
    const [comunas] = await conn.query("SELECT * FROM comunas_chile");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(comunas));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay Comunas creadas",
      });
    }
    return res.json(comunas);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al consultar por las comunas",
    });
  }
}