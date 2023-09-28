import { Request, Response } from "express";
import { connect } from "../database";

export async function getPrivilegios(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const conn = await connect();
    const [privilegio] = await conn.query("SELECT * FROM privilegios_usuarios");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(privilegio));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay privilegios creados",
      });
    }
    return res.json(privilegio);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los privilegios",
    });
  }
}