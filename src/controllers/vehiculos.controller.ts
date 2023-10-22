import { Request, Response } from "express";
import { connect } from "../database";
import { Vehiculos } from "../interface/Vehiculos";
import path from "path"
import fs from "fs"
import { ZodError } from "zod";
import {
  createVehiculoSchema,
  updateVehiculoSchema,
} from "../schemas/vehiculoSchema";
import { createExcel } from '../utils/createExcel'

export async function getVehiculos(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const conn = await connect();
    const [vehiculos] = await conn.query("SELECT * FROM vista_vehiculos");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(vehiculos));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay Vehiculos creados",
      });
    }
    return res.json(vehiculos);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los vehiculos",
    });
  }
}

export async function createVehiculo(req: Request, res: Response) {
  const newVehiculo: Vehiculos = req.body;
  try {
    //VALIDANDO CAMPOS ENVIADOS AL SERVIDOR
    createVehiculoSchema.parse(newVehiculo);
    const conn = await connect();
    await conn.query("INSERT INTO vehiculo SET ?", [newVehiculo]);
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
    const [vehiculo] = await conn.query(
      "SELECT * FROM vehiculo WHERE patente = ?",
      [id]
    );
    //VALIDANDO SI EL ID EXISTE O NO
    const result = JSON.parse(JSON.stringify(vehiculo));
    if (result <= 0) {
      return res.status(404).json({
        message: "Vehiculo no encontrado",
      });
    } else {
      return res.status(200).json(result[0]);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener el vehiculo",
    });
  }
}

export async function updateVehiculo(req: Request, res: Response) {
  const id = req.params.id;
  const updateVehiculo: Vehiculos = req.body;
  try {
    //VALIDANDO CAMPOS DE ENTRADA ENVIADOS AL SERVIDOR
    updateVehiculoSchema.parse(updateVehiculo);
    const conn = await connect();
    const [patente] = await conn.query(
      "SELECT * FROM vehiculo WHERE patente = ?",
      [id]
    );
    //VALIDANDO SI EXISTE O NO EL ID
    const result = JSON.parse(JSON.stringify(patente));
    if (result <= 0) {
      return res.status(404).json({
        message: "Vehiculo no encontrado",
      });
    }
    await conn.query("UPDATE vehiculo SET ? WHERE patente = ?", [
      updateVehiculo,
      id,
    ]);
    return res.status(200).json({
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
    //VALIDANDO CAMPOS DE ENTRADA ENVIADOS AL SERVIDOR
    const conn = await connect();
    const [patente] = await conn.query(
      "SELECT * FROM vehiculo WHERE patente = ?",
      [id]
    );
    //VALIDANDO SI EXISTE O NO EL ID
    const result = JSON.parse(JSON.stringify(patente));
    if (result <= 0) {
      return res.status(404).json({
        message: "Vehiculo no encontrado",
      });
    }
    
    await conn.query("UPDATE vehiculo SET ? WHERE patente = ?", [
      {estado_vehiculo: 2},
      id,
    ]);

    return res.status(200).json({
      message: "Vehiculo eliminado",
    });

  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al eliminar el vehiculo",
    });
  }
}

export async function getVehiculosActivos(req: Request, res: Response) {
  try {
    const conn = await connect();
    const [vehiculosActivos] = await conn.query(
      "SELECT * FROM vehiculo WHERE estado_vehiculo = ?",
      [1]
    );
    return res.status(200).json(vehiculosActivos);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al conseguir los vehiculos activos",
    });
  }
}

export async function getVehiculosExcel(
  req: Request,
  res: Response
) {
  try {
    const conn = await connect();
    const [vehiculos] = await conn.query("SELECT * FROM vista_vehiculos");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(vehiculos));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay Vehiculos creados",
      });
    }
    
        // VALIDANDO SI HAY O NO VEHICULOS CREADOS
        if (!Array.isArray(vehiculos) || vehiculos.length === 0) {
          return res.status(404).json({
            message: "No hay Despachos creados",
          });
        }
    
        // Asegúrate de que despachos sea una matriz de objetos JavaScript
        const vehiculosArray = vehiculos.map((row) => ({ ...row }));
    
        await createExcel(vehiculosArray, 'vehiculos')
        const filePath = path.join(__dirname, '..', '..',  `vehiculos.xlsx`);
        // Configura la respuesta de descarga
        res.setHeader('Content-Disposition', 'attachment; filename=vehiculos.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    
        // Envía el archivo como respuesta
        res.sendFile(filePath, (err) => {
          // Maneja errores si es necesario
          if (err) {
            console.error('Error al enviar el archivo', err);
            res.status(500).send('Error al descargar el archivo');
          }
    
          // Elimina el archivo temporal después de enviarlo
          fs.unlinkSync(filePath);
        })

  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al consultar por los vehiculos",
    });
  }
}