import express, { Application } from "express";
import morgan from "morgan";

//Routes
import IndexRoutes from "./routes/index.routes";
import SucursalesRoutes from "./routes/sucursales.routes";

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
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use("/sucursales", SucursalesRoutes);
  }
}

export default App;
