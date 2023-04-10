import { z } from "zod";

export const createSucursalSchema = z.object({
  //VALIDAR NOMBRE SIN ESPACIOS
  nombre_sucursal: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F\s]{3,30}$/g, "Nombre de sucursal inválida")
    .trim(),
  estado_sucursal: z
    .number()
    .optional(),
});

export const updateSucursalSchema = z
  .object({
    nombre_sucursal: z
      .string()
      .regex(/^[A-Za-z\u00C0-\u017F\s]{3,30}$/g, "Nombre de sucursal inválida")
      .trim()
      .optional(),
    estado_sucursal: z
      .number()
      .optional(),
  })
