import { Request, Response } from "express";
import { connect } from "../database";
import { Vehiculos } from "../interface/Vehiculos";
import { ZodError } from "zod";
import {
  createVehiculoSchema,
  updateVehiculoSchema,
} from "../schemas/vehiculoSchema";

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
    createVehiculoSchema.parse(newVehiculo);
    const conn = await connect();
    await conn.query("INSERT INTO vehiculo SET ?", [newVehiculo]);
    //VALIDAR SI SE ENVIAN DATOS INCORRECTOS A DB
    return res.status(201).json({
      message: "Vehiculo creado",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al crear un vehiculo",
    });
  }
}

export async function getVehiculo(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const conn = await connect();
    const vehiculo = await conn.query(
      "SELECT * FROM vehiculo WHERE patente = ?",
      [id]
    );
    return res.json(vehiculo[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener el vehiculo",
    });
  }
}

export async function updateVehiculo(req: Request, res: Response) {
  const id = req.params.id;
  const updateVehiculo = req.body;
  try {
    updateVehiculoSchema.parse(updateVehiculoSchema);
    const conn = await connect();
    await conn.query("UPDATE vehiculo SET ? WHERE patente = ?", [
      updateVehiculo,
      id,
    ]);
    //VALIDAR SI RUTA ES DIFERENTE Y SI SE ENVIA UN DATO INEXISTENTE
    return res.json({
      message: "Vehiculo actualizado",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al editar el vehiculo",
    });
  }
}

export async function deleteVehiculo(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    await conn.query("DELETE FROM vehiculo WHERE patente = ?", [id]);
    return res.json({
      message: "Vehiculo eliminado",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al eliminar el vehiculo",
    });
  }
}

export async function getVehiculosActivos(req: Request, res: Response) {
  try {
    const conn = await connect();
    const vehiculosActivos = await conn.query(
      "SELECT * FROM vehiculo WHERE estado_vehiculo = ?",
      [1]
    );
    return res.json(vehiculosActivos[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al conseguir los vehiculos activos",
    });
  }
}
