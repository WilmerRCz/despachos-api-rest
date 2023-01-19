export interface Despachos {
  id_despachos?: number;
  usuario_despachador: number;
  sucursal_despacho: number;
  nombre_cliente: String;
  rut_cliente_despacho: String;
  direccion_calle_cliente: String;
  nro_calle_cliente: number;
  apto_cliente: number;
  comuna_cliente: number;
  codigo_celular_cliente?: number;
  celular_cliente?: number;
  tipo_factura_guia: number;
  nro_guia_factura: number;
  nro_oc: String;
  vehiculo_despacho: String;
  monto_venta: number;
  comentario_despacho?: String;
  estado_despacho?: number;
  fecha_creacion_despacho?: Date;
  fecha_modificacion_despacho?: Date;
  fechayhora_comienzo_despacho?: Date;
  fechayhora_termino_despacho?: Date;
}
