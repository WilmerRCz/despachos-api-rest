import { Request, Response } from "express";
import { connect } from "../database";
import { Vehiculos } from "../interface/Vehiculos";

export async function getVehiculos(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const conn = await connect();
    const vehiculos = await conn.query("SELECT * FROM vehiculo");
    return res.json(vehiculos[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los vehiculos",
    });
  }
}

export async function createVehiculo(req: Request, res: Response) {
  const newVehiculo: Vehiculos = req.body;
  try {
    const conn = await connect();
    await conn.query("INSERT INTO vehiculo SET ?", [newVehiculo]);
    return res.status(201).json({
      message: "Vehiculo creado",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al crear un vehiculo",
    });
  }
}

export async function getVehiculo(req: Request, res: Response) {
  const id = req.params.id;
    const conn = await connect();
    const vehiculo = await conn.query(
      "SELECT * FROM vehiculo WHERE patente = ?",
      [id]
    );
      return res.json(vehiculo[0]);
  
}
