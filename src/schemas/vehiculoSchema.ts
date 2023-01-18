import { z } from "zod";

export const createVehiculoSchema = z.object({
  //VALIDAR NOMBRE SIN ESPACIOS
  patente: z
    .string()
    .trim()
    .min(3, "Por favor introducir un nombre válido")
    .max(6, "Nombre de sucursal muy largo"),
  sucursal_vehiculo: z
    .number()
    .min(1, "No existe sucursal")
    .max(6, "No existe sucursal"),
  estado_sucursal: z
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
    estado_sucursal: z
      .number()
      .min(1, "No existe el estado")
      .max(2, "No existe el estado")
      .optional(),
  })
  .strict("Esta tratando de modificar campos inmodificables");
