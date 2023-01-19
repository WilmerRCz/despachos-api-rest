import { z } from "zod";

export const createDespachoSchema = z.object({
  //VALIDAR NOMBRE SIN ESPACIOS
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
    .trim()
    .min(3, "Por favor introducir un nombre válido")
    .max(60, "No se aceptan tantos caracteres"),
  rut_cliente_despacho: z
    .string()
    .trim()
    .min(11, "Por favor introducir un rut válido")
    .max(12, "Rut invalido"),
  direccion_calle_cliente: z
    .string()
    .trim()
    .min(3, "Por favor introducir una dirección válida")
    .max(60, "Dirección muy larga"),
  nro_calle_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El número de calle no puede ser negativo")
    .min(1, "El número de calle no puede ser menor a 1")
    .max(10000, "El número de calle no es válido"),
  apto_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El número de departamento no puede ser negativo")
    .min(1, "El número de departamento no puede ser menor a 1")
    .max(60000, "El número de departamento no es válido"),
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
    .optional(),
  celular_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El celular debe ser mayor a 0")
    .max(9999999999999, "Celular no válido")
    .optional(),
  tipo_factura_guia: z
    .number()
    .int("No se puede ingresar string")
    .positive("El celular no puede ser negativo")
    .min(1, "Tipo de documento inválido")
    .max(2, "Tipo de documento inválido"),
  nro_guia_factura: z
    .number()
    .int("No se puede ingresar string")
    .positive("El número de guia o factura debe ser mayor a 0")
    .max(999999999999, "Número inválido"),
  nro_oc: z
    .string()
    .trim()
    .min(3, "Por favor introducir una orden de compra válida")
    .max(11, "Orden de compra muy larga"),
  vehiculo_despacho: z
    .string()
    .trim()
    .min(6, "Ingresar una patente válida")
    .max(6, "Ingresar una patente válida"),
  monto_venta: z.number().positive('El monto de la venta debe ser mayor a 0'),
  comentario_despacho: z
    .string()
    .trim()
    .min(3, "Por favor introducir un comentario válido")
    .max(255, "Comentario excede capacidad máxima")
    .optional(),
  estado_despacho: z
    .number()
    .int("No se puede ingresar string")
    .positive("El celular no puede ser negativo")
    .min(1, "No existe estado del despacho")
    .max(4, "No existe estado del despacho")
    .optional(),
  fechayhora_comienzo_despacho: z.string().datetime().optional(),
  fechayhora_termino_despacho: z.string().datetime().optional(),
});

export const updateDespachoSchema = z
  .object({
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
    .trim()
    .min(3, "Por favor introducir un nombre válido")
    .max(60, "No se aceptan tantos caracteres"),
  rut_cliente_despacho: z
    .string()
    .trim()
    .min(11, "Por favor introducir un rut válido")
    .max(12, "Rut invalido"),
  direccion_calle_cliente: z
    .string()
    .trim()
    .min(3, "Por favor introducir una dirección válida")
    .max(60, "Dirección muy larga"),
  nro_calle_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El número de calle no puede ser negativo")
    .min(1, "El número de calle no puede ser menor a 1")
    .max(10000, "El número de calle no es válido"),
  apto_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El número de departamento no puede ser negativo")
    .min(1, "El número de departamento no puede ser menor a 1")
    .max(60000, "El número de departamento no es válido"),
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
    .optional(),
  celular_cliente: z
    .number()
    .int("No se puede ingresar string")
    .positive("El celular debe ser mayor a 0")
    .max(9999999999999, "Celular no válido")
    .optional(),
  tipo_factura_guia: z
    .number()
    .int("No se puede ingresar string")
    .positive("El celular no puede ser negativo")
    .min(1, "Tipo de documento inválido")
    .max(2, "Tipo de documento inválido"),
  nro_guia_factura: z
    .number()
    .int("No se puede ingresar string")
    .positive("El número de guia o factura debe ser mayor a 0")
    .max(999999999999, "Número inválido"),
  nro_oc: z
    .string()
    .trim()
    .min(3, "Por favor introducir una orden de compra válida")
    .max(11, "Orden de compra muy larga"),
  vehiculo_despacho: z
    .string()
    .trim()
    .min(6, "Ingresar una patente válida")
    .max(6, "Ingresar una patente válida"),
  monto_venta: z.number().positive('El monto de la venta debe ser mayor a 0'),
  comentario_despacho: z
    .string()
    .trim()
    .min(3, "Por favor introducir un comentario válido")
    .max(255, "Comentario excede capacidad máxima")
    .optional(),
  estado_despacho: z
    .number()
    .int("No se puede ingresar string")
    .positive("El celular no puede ser negativo")
    .min(1, "No existe estado del despacho")
    .max(4, "No existe estado del despacho")
    .optional(),
  fechayhora_comienzo_despacho: z.string().datetime().optional(),
  fechayhora_termino_despacho: z.string().datetime().optional(),
  })
  .strict("Esta tratando de modificar campos inmodificables");
