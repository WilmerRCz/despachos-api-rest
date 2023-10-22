import { Request, Response } from "express";
import { connect } from "../database";
import { Sucursales } from "../interface/Sucursales";
import path from "path"
import fs from "fs"
import {
  createSucursalSchema,
  updateSucursalSchema,
} from "../schemas/sucursalSchema";
import { ZodError } from "zod";
import { createExcel } from '../utils/createExcel'

export async function getSucursales(
  req: Request,
  res: Response
){
  try {
    const conn = await connect();
    const [sucursales] = await conn.query("SELECT * FROM vista_sucursales");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(sucursales));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay Sucursales creadas",
      });
    }
    return res.json(sucursales);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Ocurrio un error al consultar por las sucursales",
    });
  }
}

export async function createSucursal(req: Request, res: Response) {
  const newSucursal: Sucursales = req.body;
  try {
    //VALIDANDO CAMPOS ENVIADOS AL SERVIDOR
    createSucursalSchema.parse(newSucursal);
    const conn = await connect();
    await conn.query("INSERT INTO sucursales SET ?", [newSucursal]);
    return res.status(201).json({
      message: "Sucursal creada",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al crear una sucursal",
    });
  }
}

export async function getSucursal(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const [sucursal] = await conn.query(
      "SELECT * FROM sucursales WHERE id_sucursal = ?",
      [id]
    );
    //VALIDANDO SI EL ID EXISTE O NO
    const result = JSON.parse(JSON.stringify(sucursal));
    if (result <= 0) {
      res.status(404).json({
        message: "Sucursal no encontrada",
      });
    } else {
      return res.status(200).json(result[0]);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener la sucursal",
    });
  }
}

export async function updateSucursal(req: Request, res: Response) {
  const id = req.params.id;
  const updateSucursal: Sucursales = req.body;
  
  try {
    //VALIDANDO CAMPOS DE ENTRADA ENVIADOS AL SERVIDOR
    updateSucursalSchema.parse(updateSucursal);
    const conn = await connect();
    const [id_sucursal] = await conn.query(
      "SELECT * FROM sucursales WHERE id_sucursal = ?",
      [id]
    );
    //VALIDANDO SI EXISTE O NO EL ID
    const result = JSON.parse(JSON.stringify(id_sucursal));
    if (result <= 0) {
      return res.status(404).json({
        message: "Sucursal no encontrada",
      });
    }
    await conn.query("UPDATE sucursales SET ? WHERE id_sucursal = ?", [
      updateSucursal,
      id,
    ]);
    return res.status(200).json({
      message: "Sucursal actualizada",
    });
    
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al actualizar la sucursal",
    });
  }

}

export async function deleteSucursal(req: Request, res: Response) {
  const id = req.params.id;
  
  try {
    //VALIDANDO CAMPOS DE ENTRADA ENVIADOS AL SERVIDOR
    const conn = await connect();
    const [id_sucursal] = await conn.query(
      "SELECT * FROM sucursales WHERE id_sucursal = ?",
      [id]
    );
    //VALIDANDO SI EXISTE O NO EL ID
    const result = JSON.parse(JSON.stringify(id_sucursal));
    if (result <= 0) {
      return res.status(404).json({
        message: "Sucursal no encontrada",
      });
    }
    await conn.query("UPDATE sucursales SET ? WHERE id_sucursal = ?", [
      {estado_sucursal: 2},
      id,
    ]);
    return res.status(200).json({
      message: "Sucursal eliminada",
    });
    
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al eliminar la sucursal",
    });
  }
}

export async function getSucursalesActivas(req: Request, res: Response) {
  try {
    const conn = await connect();
    const [sucursalesActivas] = await conn.query(
      "SELECT * FROM sucursales WHERE estado_sucursal = ?",
      [1]
    );
    return res.status(200).json(sucursalesActivas);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al encontrar sucursales activas",
    });
  }
}

export async function getSucursalesExcel(
  req: Request,
  res: Response
){
  try {
    const conn = await connect();
    const [sucursales] = await conn.query("SELECT * FROM vista_sucursales");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(sucursales));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay Sucursales creadas",
      });
    }
        // VALIDANDO SI HAY O NO VEHICULOS CREADOS
        if (!Array.isArray(sucursales) || sucursales.length === 0) {
          return res.status(404).json({
            message: "No hay Despachos creados",
          });
        }
    
        // Asegúrate de que despachos sea una matriz de objetos JavaScript
        const sucursalesArray = sucursales.map((row) => ({ ...row }));
    
        await createExcel(sucursalesArray, 'sucursales')
        const filePath = path.join(__dirname, '..', '..',  `sucursales.xlsx`);
        // Configura la respuesta de descarga
        res.setHeader('Content-Disposition', 'attachment; filename=sucursales.xlsx');
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
    console.log(error)
    return res.status(500).json({
      message: "Ocurrio un error al consultar por las sucursales",
    });
  }
}