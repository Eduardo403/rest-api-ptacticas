import express from "express";
import routes from "./routes/employd.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use("/api", routes);

app.use((req, res, next) => {
  res.status(404).json({
    massage: "empoindt not fount",
  });
});

export default app;
