import { Router } from "express";
import { ping } from "../controller/index.controller.js";

const indexRoutes = Router();
indexRoutes.get("/ping", ping);
export default indexRoutes;
