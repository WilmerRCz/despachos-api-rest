import { Request, Response } from "express";
import { connect } from "../database";

export async function getCelulares(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const conn = await connect();
    const [celulares] = await conn.query("SELECT * FROM prefijos_telefonicos_paises");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(celulares));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay prefijos telefónicos creados",
      });
    }
    return res.json(celulares);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los prefijos telefónicos",
    });
  }
}