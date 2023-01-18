import { z } from "zod";

export const loginSchema = z
  .object({
    correo: z
      .string()
      .min(1, "El correo es requerido")
      .email({ message: "Correo invalido" }),
    contrasena: z.string().min(6, "La contraseña es requerida"),
  })
  .strict();
