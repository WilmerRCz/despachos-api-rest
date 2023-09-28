import { z } from "zod";


export const createUsuarioSchema = z.object({
  //VALIDAR NOMBRE SIN ESPACIOS
  nombre_usuario: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Nombre inválido")
    .trim()
    .min(2, "Por favor introducir un nombre válido")
    .max(30, "Nombre de sucursal muy largo"),
  apellido_usuario: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Apellido inválido")
    .trim()
    .min(2, "Por favor introducir un nombre válido")
    .max(30, "Nombre de sucursal muy largo"),
  correo: z
    .string()
    .trim()
    .min(1, "El correo es requerido")
    .email({ message: "Correo invalido" }),
  contrasena: z.string().min(6, "La contraseña es requerida"),
  privilegio: z
    .number()
    .min(1, "No existe privilegio")
    .max(4, "No existe privilegio"),
  sucursal: z
    .number()
    .min(1, "No existe sucursal")
    .max(6, "No existe sucursal"),
  estado_usuario: z
    .number()
    .min(1, "No existe el estado")
    .max(2, "No existe el estado")
    .optional(),
});

export const updateUsuarioSchema = z
  .object({
    nombre_usuario: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Nombre inválido")
    .trim()
    .min(2, "Por favor introducir un nombre válido")
    .max(30, "Nombre de sucursal muy largo").optional(),
  apellido_usuario: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Apellido inválido")
    .trim()
    .min(2, "Por favor introducir un nombre válido")
    .max(30, "Nombre de sucursal muy largo").optional(),
  correo: z
    .string()
    .trim()
    .min(1, "El correo es requerido")
    .email({ message: "Correo invalido" }).optional(),
  contrasena: z.string().min(6, "La contraseña debe ser mayor a 6").optional(),
  privilegio: z
    .number()
    .min(1, "No existe privilegio")
    .max(4, "No existe privilegio")
    .optional(),
  sucursal: z
    .number()
    .min(1, "No existe sucursal")
    .max(6, "No existe sucursal")
    .optional(),
  estado_usuario: z
    .number()
    .min(1, "No existe el estado")
    .max(2, "No existe el estado")
    .optional(),
  })
