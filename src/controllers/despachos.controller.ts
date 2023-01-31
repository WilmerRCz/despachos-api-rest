import { Request, Response } from "express";
import { connect } from "../database";
import { Despachos } from "../interface/Despachos";
import { ZodError } from "zod";
import { createDespachoSchema, updateDespachoSchema } from "../schemas/despachoSchema";

export async function getDespachos(req: Request, res: Response) {
  try {
    const conn = await connect();
    const [despachos] = await conn.query("SELECT * FROM vista_despachos_totales");
    //VALIDANDO SI HAY O NO VEHICULOS CREADOS
    const result = JSON.parse(JSON.stringify(despachos));
    if (result <= 0) {
      return res.status(404).json({
        message: "No hay Despachos creados",
      });
    }
    return res.json(despachos);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al encontrar los despachos",
    });
  }
}

export async function getDespacho(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const [despacho] = await conn.query(
      "SELECT * FROM despachos WHERE id_despacho = ?",
      [id]
    );
    //VALIDANDO SI EL ID EXISTE O NO
    const result = JSON.parse(JSON.stringify(despacho));
    if (result <= 0) {
      return res.status(404).json({
        message: "Despacho no encontrado",
      });
    } else {
      return res.status(200).json(result[0]);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener el despacho",
    });
  }
}

export async function createDespacho(req: Request, res: Response) {
  const newDespacho: Despachos = req.body;
  try {
    //VALIDANDO CAMPOS ENVIADOS AL SERVIDOR
    createDespachoSchema.parse(newDespacho);
    const conn = await connect();
    await conn.query("INSERT INTO despachos SET ?", [newDespacho]);
    return res.status(201).json({
      message: "Despacho creado",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al crear el despacho",
    });
  }
}

export async function updateDespacho(req: Request, res: Response) {
  const id = req.params.id;
  const updateDespacho = req.body;
  try {
        //VALIDANDO CAMPOS DE ENTRADA ENVIADOS AL SERVIDOR
    updateDespachoSchema.parse(updateDespacho);
    const conn = await connect();
    const [despacho] = await conn.query(
      "SELECT * FROM despachos WHERE id_despacho = ?",
      [id]
    );
    //VALIDANDO SI EXISTE O NO EL ID
    const result = JSON.parse(JSON.stringify(despacho));
    if (result <= 0) {
      return res.status(404).json({
        message: "Despacho no encontrado",
      });
    }
    await conn.query("UPDATE despachos SET ? WHERE id_despacho = ?", [
      updateDespacho,
      id,
    ]);
    return res.status(200).json({
      message: "Despacho actualizado",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }
    return res.status(500).json({
      message: "Ocurrio un error al actualizar el despacho",
    });
  }
}
