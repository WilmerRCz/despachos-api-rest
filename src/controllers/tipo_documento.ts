import { Request, Response } from "express";
import { connect } from "../database";

export async function getTipoDocumento(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const conn = await connect();
    const [tipo_documento] = await conn.query("SELECT * FROM tipo_documento");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(tipo_documento));
    if (result <= 0) {
      return res.status(404).json({
        message: "No tipos de documentos creados",
      });
    }
    return res.json(tipo_documento);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los tipos de documentos",
    });
  }
}