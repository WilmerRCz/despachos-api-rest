import express, { Application } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

//Routes
import IndexRoutes from "./routes/index.routes";
import SucursalesRoutes from "./routes/sucursales.routes";
import VehiculosRoutes from "./routes/vehiculos.routes";
import UsuariosRoutes from "./routes/usuarios.routes";
import DespachosRoutes from "./routes/despachos.routes";
import LoginRoutes from "./routes/login.routes";
import ComunasRoutes from "./routes/comunas.routes";
import CelularesRoutes from "./routes/celulares.routes";
import TipoDocumento from "./routes/tipo_documento.routes"

class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        credentials: true,
      })
    );
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use("/api/v1/sucursales", SucursalesRoutes);
    this.app.use("/api/v1/vehiculos", VehiculosRoutes);
    this.app.use("/api/v1/usuarios", UsuariosRoutes);
    this.app.use("/api/v1/despachos", DespachosRoutes);
    this.app.use("/api/v1/login", LoginRoutes);
    this.app.use("/api/v1/comunas", ComunasRoutes);
    this.app.use("/api/v1/celulares", CelularesRoutes);
    this.app.use("/api/v1/tipo_documento", TipoDocumento)

    this.app.use((req, res) => {
      res.status(404).json({
        message: "No se encontró la ruta",
      });
    });
  }
}

export default App;
