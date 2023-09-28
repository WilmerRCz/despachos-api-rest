export interface Usuarios {
  id_usuario?: String;
  nombre_usuario: String;
  apellido_usuario: String;
  correo: String;
  contrasena: string;
  privilegio: number;
  sucursal: number;
  estado_usuario?: number;
  fecha_creacion_usuario?: Date;
  fecha_modificacion_usuario?: Date;
}

export interface UpdateUsuarios {
  id_usuario?: String;
  nombre_usuario: String;
  apellido_usuario: String;
  correo: String;
  contrasena?: string;
  privilegio: number;
  sucursal: number;
  estado_usuario?: number;
  fecha_creacion_usuario?: Date;
  fecha_modificacion_usuario?: Date;
}