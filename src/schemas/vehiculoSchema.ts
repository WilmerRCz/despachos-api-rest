import { z } from "zod";

export const createVehiculoSchema = z.object({
  //VALIDAR NOMBRE SIN ESPACIOS
  patente: z
    .string().regex(/^[A-Za-z0-9]{6,6}$/g, 'Patente inválida'),
  sucursal_vehiculo: z
    .number()
    .min(1, "No existe sucursal")
    .max(6, "No existe sucursal"),
  estado_vehiculo: z
    .number()
    .min(1, "No existe el estado")
    .max(2, "No existe el estado")
    .optional(),
});

export const updateVehiculoSchema = z
  .object({
    sucursal_vehiculo: z
      .number()
      .min(1, "No existe sucursal")
      .max(6, "No existe sucursal")
      .optional(),
    estado_vehiculo: z
      .number()
      .min(1, "No existe el estado")
      .max(2, "No existe el estado")
      .optional(),
  })
  .strict("Esta tratando de modificar campos inmodificables");
