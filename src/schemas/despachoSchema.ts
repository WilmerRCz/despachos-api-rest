import { z } from "zod";
const validationRut = /^\d{1,3}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;

export const createDespachoSchema = z.object({
  usuario_despachador: z
    .number()
    .int("No se puede ingresar string")
    .positive("Usuario Invalido")
    .min(1, "El id del usuario debe ser mayor a 1")
    .max(30, "El id del usuario debe ser mayor a 30"),
  sucursal_despacho: z
    .number()
    .int("No se puede ingresar string")
    .positive("Sucursal Invalida")
    .min(1, "El id de la sucursal debe ser mayor a 1")
    .max(30, "El id de la sucursal debe ser menor a 30"),
  nombre_cliente: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F0-9\s]{3,60}$/g, "Nombre inválido")
    .trim()
    .min(3, "Por favor introducir un nombre válido")
    .max(60, "No se aceptan tantos caracteres"),
  rut_cliente_despacho: z
    .string()
    .regex(validationRut, "Rut inválido")
    .trim()
    .min(11, "Por favor introducir un rut válido")
    .max(12, "Rut invalido"),
  direccion_calle_cliente: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F0-9\s.-]{3,60}$/g, "Dirección inválida")
    .trim()
    .min(3, "Por favor introducir una dirección válida")
    .max(60, "Dirección muy larga"),
  nro_calle_cliente: z
    .string()
    .regex(/^[0-9]{2,10}$/g, "El nro de calle es inválido"),
  apto_cliente: z
    .string()
    .regex(/^[0-9]{0,10}$/g, "El nro de apto es inválido")
    .nullable()
    .optional(),
  comuna_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El número de comuna no puede ser negativo")
    .min(1, "El número de comuna no puede ser menor a 1")
    .max(346, "La comuna no existe"),
  codigo_celular_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El código de celular no puede ser negativo")
    .min(1, "El código de celular no puede ser menor a 1")
    .max(124, "Código inexistente")
    .nullable()
    .optional(),
  celular_cliente: z
    .string()
    .regex(/^[0-9]{0,12}$/g, "Número celular inválido")
    .nullable()
    .optional(),
  tipo_documento: z
    .number()
    .int("No se puede ingresar string")
    .positive("El celular no puede ser negativo")
    .min(1, "Tipo de documento inválido")
    .max(3, "Tipo de documento inválido"),
  nro_documento: z
    .string()
    .regex(/^[0-9]{1,12}$/g, "Número documento inválido"),
  nro_oc: z
    .string()
    .regex(/^[A-Za-z0-9\u00C0-\u017F\s]{2,11}$/g, "Número de OC inválida")
    .trim(),
  vehiculo_despacho: z
    .string()
    .regex(/^[A-Za-z0-9]{6,6}$/g, "Patente inválida")
    .trim(),
  monto_venta: z
    .string()
    .regex(/^(?!-)(\d{1,12}(\.\d{0,2})?)?$/, "Monto de venta inválido"),
  comentario_despacho: z
    .string()
    .trim()
    .min(0, "Por favor introducir un comentario válido")
    .max(255, "Comentario excede capacidad máxima")
    .nullable()
    .optional(),
  estado_despacho: z
    .number()
    .int("No se puede ingresar string")
    .min(1, "No existe estado del despacho")
    .max(4, "No existe estado del despacho")
    .optional(),
  estado_actividad: z
    .number()
    .int("No se puede ingresar string")
    .min(1, "No existe estado")
    .max(2, "No existe estado")
    .optional(),
  fechayhora_comienzo_despacho: z.string().datetime().optional(),
  fechayhora_termino_despacho: z.string().datetime().optional(),
});

export const updateDespachoSchema = z.object({
  usuario_despachador: z
    .number()
    .int("No se puede ingresar string")
    .positive("Usuario Invalido")
    .min(1, "El id del usuario debe ser mayor a 1")
    .max(30, "El id del usuario debe ser mayor a 30")
    .optional(),
  sucursal_despacho: z
    .number()
    .int("No se puede ingresar string")
    .positive("Sucursal Invalida")
    .min(1, "El id de la sucursal debe ser mayor a 1")
    .max(30, "El id de la sucursal debe ser menor a 30")
    .optional(),
  nombre_cliente: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F0-9\s]{3,60}$/g, "Nombre inválido")
    .trim()
    .min(3, "Por favor introducir un nombre válido")
    .max(60, "No se aceptan tantos caracteres")
    .optional(),
  rut_cliente_despacho: z
    .string()
    .regex(validationRut, "Rut inválido")
    .trim()
    .min(11, "Por favor introducir un rut válido")
    .max(12, "Rut invalido")
    .optional(),
  direccion_calle_cliente: z
    .string()
    .regex(/^[A-Za-z\u00C0-\u017F0-9\s.-]{3,60}$/g, "Dirección inválida")
    .trim()
    .min(3, "Por favor introducir una dirección válida")
    .max(60, "Dirección muy larga")
    .optional(),
  nro_calle_cliente: z
    .string()
    .regex(/^[0-9]{2,10}$/g, "El nro de calle es inválido")
    .optional(),
  apto_cliente: z
    .string()
    .regex(/^[0-9]{0,12}$/g, "El nro de apto es inválido")
    .nullable()
    .optional(),
  comuna_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El número de comuna no puede ser negativo")
    .min(1, "El número de comuna no puede ser menor a 1")
    .max(346, "La comuna no existe")
    .optional(),
  codigo_celular_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El código de celular no puede ser negativo")
    .min(1, "El código de celular no puede ser menor a 1")
    .max(124, "Código inexistente")
    .nullable()
    .optional(),
  celular_cliente: z
    .string()
    .regex(/^[0-9]{0,12}$/g, "Número celular inválido")
    .nullable()
    .optional(),
  tipo_documento: z
    .number()
    .int("No se puede ingresar string")
    .positive("El tipo de documento no puede ser negativo")
    .min(1, "Tipo de documento inválido")
    .max(3, "Tipo de documento inválido")
    .optional(),
  nro_documento: z
    .string()
    .regex(/^[0-9]{1,12}$/g, "Número documento inválido")
    .optional(),
  nro_oc: z
    .string()
    .regex(/^[A-Za-z0-9\u00C0-\u017F\s]{2,11}$/g, "Número de OC inválida")
    .trim()
    .optional(),
  vehiculo_despacho: z
    .string()
    .regex(/^[A-Za-z0-9]{6,6}$/g, "Patente inválida")
    .trim()
    .optional(),
  monto_venta: z
    .string()
    .regex(/^(?!-)(\d{1,12}(\.\d{0,2})?)?$/, "Monto de venta inválido")
    .optional(),
  comentario_despacho: z
    .string()
    .trim()
    .min(0, "Por favor introducir un comentario válido")
    .max(255, "Comentario excede capacidad máxima")
    .optional(),
  estado_despacho: z
    .number()
    .int("No se puede ingresar string")
    .min(1, "No existe estado del despacho")
    .max(4, "No existe estado del despacho")
    .optional(),
  estado_actividad: z
    .number()
    .int("No se puede ingresar string")
    .min(1, "No existe estado")
    .max(2, "No existe estado")
    .optional(),
  fechayhora_comienzo_despacho: z.string().regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, 'La fecha debe tener un formato AAAA-MM-DD HH:mm:ss').optional(),
  fechayhora_termino_despacho: z.string().regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, 'La fecha debe tener un formato AAAA-MM-DD HH:mm:ss').optional(),
});
