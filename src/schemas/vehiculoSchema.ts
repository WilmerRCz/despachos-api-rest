import { z } from "zod";

export const createVehiculoSchema = z.object({
  //VALIDAR NOMBRE SIN ESPACIOS
  patente: z
    .string().regex(/^[A-Za-z0-9]{6,6}$/g, 'Patente inválida'),
  sucursal_vehiculo: z
    .number(),
  estado_vehiculo: z
    .number()
    .optional(),
});

export const updateVehiculoSchema = z
  .object({
    sucursal_vehiculo: z
      .number()
      .optional(),
    estado_vehiculo: z
      .number()
      .optional(),
  })
