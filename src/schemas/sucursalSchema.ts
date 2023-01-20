import { z } from "zod";

export const createSucursalSchema = z.object({
  //VALIDAR NOMBRE SIN ESPACIOS
  nombre_sucursal: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F\s]{3,30}$/g, "Nombre de sucursal inválida")
    .trim()
    .min(3, "Por favor introducir un nombre válido")
    .max(30, "Nombre de sucursal muy largo"),
  estado_sucursal: z
    .number()
    .min(1, "No existe el estado")
    .max(2, "No existe el estado")
    .optional(),
});

export const updateSucursalSchema = z
  .object({
    nombre_sucursal: z
      .string()
      .regex(/^[A-Za-z\u00C0-\u017F\s]{3,30}$/g, "Nombre de sucursal inválida")
      .trim()
      .min(3, "Por favor introducir un nombre válido")
      .max(30, "Nombre de sucursal muy largo")
      .optional(),
    estado_sucursal: z
      .number()
      .min(1, "No existe el estado")
      .max(2, "No existe el estado")
      .optional(),
  })
  .strict("Esta tratando de modificar campos inmodificables");
