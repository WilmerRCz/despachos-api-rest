import { Request, Response } from "express";
import { connect } from "../database";

export async function getEstadoActividad(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const conn = await connect();
    const [estado_actividad] = await conn.query("SELECT * FROM estado_actividad ORDER BY id_estado");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(estado_actividad));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay estados de despachos creados",
      });
    }
    return res.json(estado_actividad);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los estados de los despachos",
    });
  }
}